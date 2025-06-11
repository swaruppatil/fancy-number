import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberCardComponent } from "../../components/number-card/number-card.component";
import { FilterSidebarComponent } from "../../components/filter-sidebar/filter-sidebar.component";
import { NumberService } from "../../services/number.service";
import { FancyNumber } from "../../models/number.model";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NumberCardComponent, FilterSidebarComponent],
  template: `
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 py-20 text-white text-center"
    >
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-extrabold mb-4 drop-shadow-lg">
          🔥 Unlock Your Identity With A Premium Mobile Number
        </h1>
        <p class="text-xl mb-6 max-w-2xl mx-auto">
          Choose from thousands of exclusive fancy numbers that speak your
          style, status, or business.
        </p>
        <a
          href="#explore"
          class="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          🚀 Explore Now
        </a>
      </div>
    </section>

    <!-- Category Chips -->
    <div class="bg-white py-6 border-b">
      <div class="container mx-auto px-4 text-center">
        <span
          class="inline-block mx-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full"
        >
          VIP Numbers
        </span>
        <span
          class="inline-block mx-2 bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-2 rounded-full"
        >
          Business Numbers
        </span>
        <span
          class="inline-block mx-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full"
        >
          Lucky Numbers
        </span>
        <span
          class="inline-block mx-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full"
        >
          Mirror Patterns
        </span>
      </div>
    </div>

    <!-- Filter + Listings Section -->
    <section id="explore" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar Filters -->
          <div class="lg:col-span-1">
            <app-filter-sidebar></app-filter-sidebar>
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
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                No numbers found
              </h3>
              <p class="text-gray-500">
                Try adjusting your filters to see more results.
              </p>
            </div>
            } @else {
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

    <!-- Call To Action -->
    <section
      class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 mt-12 text-center"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Still thinking? 🤔</h2>
        <p class="text-lg mb-6 max-w-xl mx-auto">
          Make your number unforgettable. Claim a fancy number today and leave a
          lasting impression!
        </p>
        <a
          href="#explore"
          class="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🔍 Browse Numbers
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent implements OnInit {
  numbers: FancyNumber[] = [];
  loading = true;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.numberService.getFilteredNumbers().subscribe((numbers) => {
      this.numbers = numbers;
      this.loading = false;
    });
  }
}
