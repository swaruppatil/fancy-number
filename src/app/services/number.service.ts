import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Observable,
  BehaviorSubject,
  map,
  catchError,
  combineLatest,
} from "rxjs";
import { FancyNumber, FilterOptions } from "../models/number.model";

@Injectable({
  providedIn: "root",
})
export class NumberService {
  private numbersSubject = new BehaviorSubject<FancyNumber[]>([]);
  public numbers$ = this.numbersSubject.asObservable();

  private filterOptionsSubject = new BehaviorSubject<FilterOptions>({
    priceRange: "all",
    patternType: "all",
    search: "",
  });
  public filterOptions$ = this.filterOptionsSubject.asObservable();

  // Path to the local JSON file
  private dataUrl = "assets/numbers-data.json";

  constructor(private http: HttpClient) {
    this.loadNumbers();
  }

  // loadNumbers(): void {
  //   this.http
  //     .get<{ numbers: FancyNumber[] }>(this.dataUrl)
  //     .pipe(
  //       map((response) => {
  //         // Filter only available numbers
  //         return response.numbers.filter(
  //           (number) => number.status === "available"
  //         );
  //       }),
  //       catchError((error) => {
  //         console.error("Error loading numbers data:", error);
  //         // Return empty array in case of error
  //         return [];
  //       })
  //     )
  //     .subscribe({
  //       next: (numbers) => this.numbersSubject.next(numbers),
  //       error: (err) => console.error("Error loading numbers:", err),
  //     });
  // }
  loadNumbers(): void {
    this.http
      .get<{ numbers: FancyNumber[] }>(this.dataUrl)
      .pipe(
        map((response) => {
          console.log("Raw data from JSON:", response); // 👈 LOG RAW JSON
          const availableNumbers = response.numbers.filter(
            (number) => number.status === "available"
          );
          console.log("Filtered available numbers:", availableNumbers); // 👈 LOG FILTERED
          return availableNumbers;
        }),
        catchError((error) => {
          console.error("Error loading numbers data:", error); // 👈 LOG ERROR
          return [];
        })
      )
      .subscribe({
        next: (numbers) => {
          this.numbersSubject.next(numbers);
          console.log("Numbers added to BehaviorSubject:", numbers); // 👈 LOG PUSH
        },
        error: (err) => {
          console.error("Subscription error:", err); // 👈 EXTRA SAFETY
        },
      });
  }

  // getFilteredNumbers(): Observable<FancyNumber[]> {
  //   return this.filterOptions$.pipe(
  //     map((filters) => {
  //       const search = filters.search.toLowerCase();

  //       return this.numbersSubject.value.filter((number) => {
  //         const price = number.price;
  //         const patternType = number.pattern_type;
  //         const numberStr = number.number.toString();

  //         if (filters.priceRange === "under1000" && price >= 1000) return false;
  //         if (
  //           filters.priceRange === "1000to5000" &&
  //           (price < 1000 || price > 5000)
  //         )
  //           return false;
  //         if (filters.priceRange === "above5000" && price <= 5000) return false;

  //         if (
  //           filters.patternType !== "all" &&
  //           patternType !== filters.patternType
  //         )
  //           return false;

  //         if (search && !numberStr.toLowerCase().includes(search)) return false;

  //         return true;
  //       });
  //     })
  //   );
  // }

  getFilteredNumbers(): Observable<FancyNumber[]> {
    return combineLatest([this.numbers$, this.filterOptions$]).pipe(
      map(([numbers, filters]) => {
        return numbers.filter((number) => {
          // Filter by price range
          if (filters.priceRange !== "all") {
            if (filters.priceRange === "under1000" && number.price >= 1000)
              return false;
            if (
              filters.priceRange === "1000to5000" &&
              (number.price < 1000 || number.price > 5000)
            )
              return false;
            if (filters.priceRange === "above5000" && number.price <= 5000)
              return false;
          }

          // Filter by pattern type
          if (
            filters.patternType !== "all" &&
            number.pattern_type !== filters.patternType
          )
            return false;

          // Filter by search (number contains the search string)
          if (filters.search && !number.number.includes(filters.search))
            return false;
          return true;
        });
      })
    );
  }

  updateFilters(filters: Partial<FilterOptions>): void {
    this.filterOptionsSubject.next({
      ...this.filterOptionsSubject.value,
      ...filters,
    });
  }

  getNumberById(id: string): Observable<FancyNumber | undefined> {
    return this.numbers$.pipe(
      map((numbers) => numbers.find((number) => number.id === id))
    );
  }
}
