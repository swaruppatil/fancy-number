import { Component, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NumberService } from "../../services/number.service";

@Component({
  selector: "app-filter-sidebar",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="lg:hidden flex justify-end mb-4">
      <button
        (click)="toggleMobileFilters()"
        class="p-2 rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-100"
      >
        <svg
          class="h-6 w-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Sidebar for Large Screens OR Toggle Drawer on Mobile -->
    <div
      class="bg-white rounded-lg shadow-md p-4 lg:block"
      [class.hidden]="!showMobileFilters && isMobile"
    >
      <div class="flex justify-between items-center lg:hidden mb-4">
        <h2 class="text-lg font-bold">Filters</h2>
        <button
          (click)="toggleMobileFilters()"
          class="text-sm text-purple-600 underline"
        >
          Close
        </button>
      </div>

      <!-- Title (only desktop) -->
      <h2 class="text-xl font-bold mb-4 hidden lg:block">Filters</h2>

      <!-- Price Range Filter -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Price Range</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <input
              type="radio"
              id="price-all"
              name="priceRange"
              value="all"
              [checked]="filters.priceRange === 'all'"
              (change)="updatePriceFilter('all')"
              class="mr-2"
            />
            <label for="price-all">All Prices</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-under1000"
              name="priceRange"
              value="under1000"
              [checked]="filters.priceRange === 'under1000'"
              (change)="updatePriceFilter('under1000')"
              class="mr-2"
            />
            <label for="price-under1000">Under ₹1,000</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-1000to5000"
              name="priceRange"
              value="1000to5000"
              [checked]="filters.priceRange === '1000to5000'"
              (change)="updatePriceFilter('1000to5000')"
              class="mr-2"
            />
            <label for="price-1000to5000">₹1,000 - ₹5,000</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-above5000"
              name="priceRange"
              value="above5000"
              [checked]="filters.priceRange === 'above5000'"
              (change)="updatePriceFilter('above5000')"
              class="mr-2"
            />
            <label for="price-above5000">Above ₹5,000</label>
          </div>
        </div>
      </div>

      <!-- Pattern Type Filter -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Pattern Type</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-all"
              name="patternType"
              value="all"
              [checked]="filters.patternType === 'all'"
              (change)="updatePatternFilter('all')"
              class="mr-2"
            />
            <label for="pattern-all">All Patterns</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-repeating"
              name="patternType"
              value="Repeating"
              [checked]="filters.patternType === 'Repeating'"
              (change)="updatePatternFilter('Repeating')"
              class="mr-2"
            />
            <label for="pattern-repeating">Repeating</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-vip"
              name="patternType"
              value="VIP"
              [checked]="filters.patternType === 'VIP'"
              (change)="updatePatternFilter('VIP')"
              class="mr-2"
            />
            <label for="pattern-vip">VIP</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-custom"
              name="patternType"
              value="Custom"
              [checked]="filters.patternType === 'Custom'"
              (change)="updatePatternFilter('Custom')"
              class="mr-2"
            />
            <label for="pattern-custom">Custom</label>
          </div>
        </div>
      </div>

      <!-- Search Filter -->
      <div class="mb-4">
        <h3 class="font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search by digits..."
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          [ngModel]="filters.search"
          (ngModelChange)="updateSearchFilter($event)"
        />
      </div>

      <!-- Reset Filters -->
      <button
        (click)="resetFilters()"
        class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors"
      >
        Reset Filters
      </button>
    </div>
  `,
})
export class FilterSidebarComponent implements OnInit {
  filters = {
    priceRange: "all",
    patternType: "all",
    search: "",
  };

  showMobileFilters = false;
  isMobile = false;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.numberService.filterOptions$.subscribe((filters) => {
      this.filters = filters;
    });

    // Detect screen size
    this.isMobile = window.innerWidth < 1024;
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 1024;
    });
  }

  toggleMobileFilters(): void {
    this.showMobileFilters = !this.showMobileFilters;
  }

  updatePriceFilter(value: string): void {
    this.numberService.updateFilters({ priceRange: value });
  }

  updatePatternFilter(value: string): void {
    this.numberService.updateFilters({ patternType: value });
  }

  updateSearchFilter(value: string): void {
    this.numberService.updateFilters({ search: value });
  }

  resetFilters(): void {
    this.numberService.updateFilters({
      priceRange: "all",
      patternType: "all",
      search: "",
    });
  }
}
