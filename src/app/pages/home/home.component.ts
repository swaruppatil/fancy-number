import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberCardComponent } from "../../components/number-card/number-card.component";
import { FilterSidebarComponent } from "../../components/filter-sidebar/filter-sidebar.component";
import { NumberService } from "../../services/number.service";
import { FancyNumber } from "../../models/number.model";

// @Component({
//   selector: "app-home",
//   standalone: true,
//   imports: [CommonModule, NumberCardComponent, FilterSidebarComponent],
//   template: `
//     <!-- Hero Section -->
//     <section
//       class="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-16 sm:py-20 text-white text-center"
//     >
//       <div class="container mx-auto px-4">
//         <h1
//           class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-snug"
//         >
//           🔥 Unlock Your Identity With A Premium Mobile Number
//         </h1>
//         <p class="text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
//           Choose from thousands of exclusive fancy numbers that speak your
//           style, status, or business.
//         </p>
//         <a
//           href="#explore"
//           class="inline-block bg-white text-purple-600 font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-md hover:scale-105 transition-transform text-sm sm:text-base"
//         >
//           🚀 Explore Now
//         </a>
//       </div>
//     </section>

//<!-- Category Chips -->
// <div class="bg-white py-4 sm:py-6 border-b">
//   <div
//     class="container mx-auto px-4 text-center flex flex-wrap justify-center gap-2"
//   >
//     <span
//       class="bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
//     >
//       VIP Numbers
//     </span>
//     <span
//       class="bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
//     >
//       Business Numbers
//     </span>
//     <span
//       class="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
//     >
//       Lucky Numbers
//     </span>
//     <span
//       class="bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
//     >
//       Mirror Patterns
//     </span>
//   </div>
// </div>

//     <!-- Filter + Listings Section -->
//     <section id="explore" class="py-6 sm:py-4 bg-gray-10">
//       <div class="container mx-auto px-4">
//         <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
//           <!-- Sidebar Filters -->
//           <div class="lg:col-span-1">
//             <app-filter-sidebar></app-filter-sidebar>
//           </div>

//           <!-- Number Listings -->
//           <div class="lg:col-span-3">
//             @if (loading) {
//             <div class="flex justify-center items-center h-40 sm:h-64">
//               <div
//                 class="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-purple-500"
//               ></div>
//             </div>
//             } @else if (numbers.length === 0) {
//             <div class="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
//               <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
//                 No numbers found
//               </h3>
//               <p class="text-sm sm:text-base text-gray-500">
//                 Try adjusting your filters to see more results.
//               </p>
//             </div>
//             } @else {
//             <div
//               class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
//             >
//               @for (number of numbers; track number.id) {
//               <app-number-card [number]="number"></app-number-card>
//               }
//             </div>
//             }
//           </div>
//         </div>
//       </div>
//     </section>

//     <!-- Call To Action -->
//     <section
//       class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 sm:py-12 mt-10 sm:mt-12 text-center"
//     >
//       <div class="container mx-auto px-4">
//         <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
//           Still thinking? 🤔
//         </h2>
//         <p class="text-base sm:text-lg mb-5 sm:mb-6 max-w-md mx-auto">
//           Make your number unforgettable. Claim a fancy number today and leave a
//           lasting impression!
//         </p>
//         <a
//           href="#explore"
//           class="inline-block bg-white text-purple-700 font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
//         >
//           🔍 Browse Numbers
//         </a>
//       </div>
//     </section>
//   `,
// })
// export class HomeComponent implements OnInit {
//   numbers: FancyNumber[] = [];
//   loading = true;

//   constructor(private numberService: NumberService) {}

//   ngOnInit(): void {
//     this.numberService.getFilteredNumbers().subscribe((numbers) => {
//       this.numbers = numbers;
//       this.loading = false;
//     });
//   }
// }

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NumberCardComponent, FilterSidebarComponent],
  template: `
    <!-- <section class="bg-gradient-to-b from-purple-100 to-white py-12">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Premium Fancy Mobile Numbers
          </h1>
          <p class="text-lg text-gray-700">
            Stand out from the crowd with a unique mobile number that reflects
            your personality.
          </p>
        </div>
      </div>
    </section> -->

    <section
      class="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-16 sm:py-20 text-white text-center"
    >
      <div class="container mx-auto px-4">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-snug"
        >
          🔥 Unlock Your Identity With A Premium Mobile Number
        </h1>
        <p class="text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Choose from thousands of exclusive fancy numbers that speak your
          style, status, or business.
        </p>
        <a
          href="#explore"
          class="inline-block bg-white text-purple-600 font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-md hover:scale-105 transition-transform text-sm sm:text-base"
        >
          🚀 Explore Now
        </a>
      </div>
    </section>

    <div class="bg-white py-4 sm:py-6 border-b">
      <div
        class="container mx-auto px-4 text-center flex flex-wrap justify-center gap-2"
      >
        <span
          class="bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
        >
          VIP Numbers
        </span>
        <span
          class="bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
        >
          Business Numbers
        </span>
        <span
          class="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
        >
          Lucky Numbers
        </span>
        <span
          class="bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
        >
          Mirror Patterns
        </span>
      </div>
    </div>
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Mobile Filter Header -->
        <div class="lg:hidden mb-6">
          <div
            class="flex justify-between items-center bg-white rounded-lg shadow-sm p-4"
          >
            <div class="flex items-center space-x-4">
              <h2 class="text-lg font-semibold text-gray-800">
                {{ numbers.length }} Numbers Available
              </h2>
              <div class="text-sm text-gray-500">
                {{ getActiveFiltersText() }}
              </div>
            </div>
            <button
              (click)="toggleMobileFilters()"
              class="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.586a1 1 0 01-.293.707L9 19.414V13.414a1 1 0 00-.293-.707L2.293 6.293A1 1 0 012 5.586V4z"
                ></path>
              </svg>
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Desktop Sidebar Filters -->
          <div class="lg:col-span-1 hidden lg:block">
            <app-filter-sidebar [isMobileOverlay]="false"></app-filter-sidebar>
          </div>

          <!-- Mobile Filters Overlay -->
          <div
            class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
            [class.opacity-0]="!mobileFiltersOpen"
            [class.pointer-events-none]="!mobileFiltersOpen"
            [class.opacity-100]="mobileFiltersOpen"
            (click)="closeMobileFilters()"
          >
            <div
              class="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
              [class.translate-x-full]="!mobileFiltersOpen"
              [class.translate-x-0]="mobileFiltersOpen"
              (click)="$event.stopPropagation()"
            >
              <div
                class="flex justify-between items-center p-4 border-b bg-purple-600 text-white"
              >
                <h3 class="text-lg font-semibold">Filter Numbers</h3>
                <button
                  (click)="closeMobileFilters()"
                  class="text-white hover:text-gray-200 transition-colors"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="overflow-y-auto h-full pb-4">
                <app-filter-sidebar
                  [isMobileOverlay]="true"
                  [onApplyFilters]="closeMobileFilters.bind(this)"
                >
                </app-filter-sidebar>
              </div>
            </div>
          </div>

          <!-- Number Listings -->
          <div class="lg:col-span-3">
            @if (loading) {
            <div class="flex justify-center items-center h-64">
              <div
                class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
              ></div>
            </div>
            } @else if (numbers.length === 0) {
            <div class="bg-white rounded-lg shadow-md p-8 text-center">
              <div class="mb-4">
                <svg
                  class="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                No numbers found
              </h3>
              <p class="text-gray-500 mb-4">
                Try adjusting your filters to see more results.
              </p>
              <button
                (click)="clearAllFilters()"
                class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Clear All Filters
              </button>
            </div>
            } @else {
            <!-- Results Summary for Desktop -->
            <div class="hidden lg:block mb-6">
              <div class="flex justify-between items-center">
                <p class="text-gray-600">
                  Showing {{ numbers.length }} of {{ totalNumbers }} numbers
                </p>
                <div class="text-sm text-gray-500">
                  {{ getActiveFiltersText() }}
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (number of numbers; track number.id) {
              <app-number-card [number]="number"></app-number-card>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent implements OnInit {
  numbers: FancyNumber[] = [];
  totalNumbers = 0;
  loading = true;
  mobileFiltersOpen = false;
  currentFilters: any = {};

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    // Subscribe to all numbers to get total count
    this.numberService.numbers$.subscribe((allNumbers) => {
      this.totalNumbers = allNumbers.length;
    });

    // Subscribe to filtered numbers
    this.numberService.getFilteredNumbers().subscribe((numbers) => {
      this.numbers = numbers;
      this.loading = false;
    });

    // Subscribe to filter changes
    this.numberService.filterOptions$.subscribe((filters) => {
      this.currentFilters = filters;
    });
  }

  toggleMobileFilters(): void {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  closeMobileFilters(): void {
    this.mobileFiltersOpen = false;
  }

  clearAllFilters(): void {
    this.numberService.updateFilters({
      priceRange: "all",
      patternType: "all",
      search: "",
    });
  }

  getActiveFiltersText(): string {
    const activeFilters: string[] = [];

    if (
      this.currentFilters.priceRange &&
      this.currentFilters.priceRange !== "all"
    ) {
      switch (this.currentFilters.priceRange) {
        case "under1000":
          activeFilters.push("Under ₹1K");
          break;
        case "1000to5000":
          activeFilters.push("₹1K-₹5K");
          break;
        case "above5000":
          activeFilters.push("Above ₹5K");
          break;
      }
    }

    if (
      this.currentFilters.patternType &&
      this.currentFilters.patternType !== "all"
    ) {
      activeFilters.push(this.currentFilters.patternType);
    }

    if (this.currentFilters.search) {
      activeFilters.push(`"${this.currentFilters.search}"`);
    }

    return activeFilters.length > 0
      ? `Filtered by: ${activeFilters.join(", ")}`
      : "All numbers";
  }
}
