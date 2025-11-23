import { Component, type OnInit, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NumberService } from "../../services/number.service";

@Component({
  selector: "app-filter-sidebar",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
      [class.shadow-none]="isMobileOverlay"
      [class.border-0]="isMobileOverlay"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between mb-6"
        [class.hidden]="isMobileOverlay"
      >
        <h2
          class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Filters
        </h2>
        <span
          *ngIf="getActiveFiltersCount() > 0"
          class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse"
        >
          {{ getActiveFiltersCount() }}
        </span>
      </div>

      <!-- Quick Stats -->
      <div
        class="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100"
      >
        <div class="text-sm text-gray-600 mb-1">Available Numbers</div>
        <div
          class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          {{ getFilteredCount() }}
        </div>
      </div>

      <!-- Price Range Filter -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-gray-900 flex items-center">
            <span class="text-xl mr-2">💰</span>
            Price Range
          </h3>
          <button
            *ngIf="filters.priceRange !== 'all'"
            (click)="updatePriceFilter('all')"
            class="text-xs text-purple-600 hover:text-purple-800 transition-colors"
          >
            Clear
          </button>
        </div>
        <div class="space-y-3">
          <label
            *ngFor="let option of priceOptions"
            [for]="'price-' + option.value + '-' + componentId"
            class="flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 group"
            [class.bg-gradient-to-r]="filters.priceRange === option.value"
            [class.from-purple-100]="filters.priceRange === option.value"
            [class.to-pink-100]="filters.priceRange === option.value"
            [class.hover:bg-gray-50]="filters.priceRange !== option.value"
            [class.border-2]="filters.priceRange === option.value"
            [class.border-purple-300]="filters.priceRange === option.value"
            [class.border]="filters.priceRange !== option.value"
            [class.border-gray-200]="filters.priceRange !== option.value"
          >
            <input
              type="radio"
              [id]="'price-' + option.value + '-' + componentId"
              [name]="'priceRange-' + componentId"
              [value]="option.value"
              [checked]="filters.priceRange === option.value"
              (change)="updatePriceFilter(option.value)"
              class="hidden"
            />
            <div class="flex items-center flex-1">
              <div
                class="flex-shrink-0 w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300"
                [class.border-purple-600]="filters.priceRange === option.value"
                [class.bg-gradient-to-r]="filters.priceRange === option.value"
                [class.from-purple-600]="filters.priceRange === option.value"
                [class.to-pink-600]="filters.priceRange === option.value"
                [class.border-gray-300]="filters.priceRange !== option.value"
                [class.group-hover:border-purple-400]="
                  filters.priceRange !== option.value
                "
              >
                <div
                  *ngIf="filters.priceRange === option.value"
                  class="w-2 h-2 bg-white rounded-full"
                ></div>
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-900">
                  {{ option.label }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ option.description }}
                </div>
              </div>
            </div>
            <div
              *ngIf="filters.priceRange === option.value"
              class="ml-2 text-purple-600"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>

      <!-- Pattern Type Filter -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-gray-900 flex items-center">
            <span class="text-xl mr-2">🎨</span>
            Pattern Type
          </h3>
          <button
            *ngIf="filters.patternType !== 'all'"
            (click)="updatePatternFilter('all')"
            class="text-xs text-purple-600 hover:text-purple-800 transition-colors"
          >
            Clear
          </button>
        </div>
        <div class="space-y-3">
          <label
            *ngFor="let option of patternOptions"
            [for]="'pattern-' + option.value + '-' + componentId"
            class="flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 group"
            [class.bg-gradient-to-r]="filters.patternType === option.value"
            [class.from-purple-100]="filters.patternType === option.value"
            [class.to-pink-100]="filters.patternType === option.value"
            [class.hover:bg-gray-50]="filters.patternType !== option.value"
            [class.border-2]="filters.patternType === option.value"
            [class.border-purple-300]="filters.patternType === option.value"
            [class.border]="filters.patternType !== option.value"
            [class.border-gray-200]="filters.patternType !== option.value"
          >
            <input
              type="radio"
              [id]="'pattern-' + option.value + '-' + componentId"
              [name]="'patternType-' + componentId"
              [value]="option.value"
              [checked]="filters.patternType === option.value"
              (change)="updatePatternFilter(option.value)"
              class="hidden"
            />
            <div class="flex items-center flex-1">
              <div
                class="flex-shrink-0 w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300"
                [class.border-purple-600]="filters.patternType === option.value"
                [class.bg-gradient-to-r]="filters.patternType === option.value"
                [class.from-purple-600]="filters.patternType === option.value"
                [class.to-pink-600]="filters.patternType === option.value"
                [class.border-gray-300]="filters.patternType !== option.value"
                [class.group-hover:border-purple-400]="
                  filters.patternType !== option.value
                "
              >
                <div
                  *ngIf="filters.patternType === option.value"
                  class="w-2 h-2 bg-white rounded-full"
                ></div>
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-900 flex items-center">
                  <span class="mr-2">{{ option.icon }}</span>
                  {{ option.label }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ option.description }}
                </div>
              </div>
            </div>
            <div
              *ngIf="filters.patternType === option.value"
              class="ml-2 text-purple-600"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>

      <!-- Search Filter -->
      <div class="mb-6">
        <h3 class="font-bold text-gray-900 flex items-center mb-4">
          <span class="text-xl mr-2">🔍</span>
          Search Numbers
        </h3>
        <div class="relative group">
          <input
            type="text"
            placeholder="Enter digits (e.g., 777)..."
            class="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300"
            [ngModel]="filters.search"
            (ngModelChange)="updateSearchFilter($event)"
          />
          <svg
            class="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <button
            *ngIf="filters.search"
            (click)="updateSearchFilter('')"
            class="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <p class="mt-2 text-xs text-gray-500 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Search by specific digits or patterns
        </p>
      </div>

      <!-- Popular Searches -->
      <div class="mb-6">
        <h4 class="text-sm font-semibold text-gray-700 mb-3">
          Popular Searches
        </h4>
        <div class="flex flex-wrap gap-2">
          <button
            *ngFor="let search of popularSearches"
            (click)="updateSearchFilter(search)"
            class="px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 text-gray-700 hover:text-purple-700 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {{ search }}
          </button>
        </div>
      </div>

      <!-- Reset Button -->
      <button
        (click)="resetFilters()"
        class="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        <span>Reset All Filters</span>
      </button>

      <!-- Apply Button (Mobile Only) -->
      <button
        *ngIf="isMobileOverlay"
        (click)="applyFilters()"
        class="w-full mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
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
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>Apply Filters</span>
      </button>

      <!-- Filter Tips -->
      <div
        *ngIf="!isMobileOverlay"
        class="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
      >
        <div class="flex items-start space-x-2">
          <svg
            class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <div class="text-sm font-semibold text-blue-900 mb-1">Pro Tip</div>
            <div class="text-xs text-blue-700">
              Combine filters to find your perfect premium number faster!
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      input[type="radio"]:checked + label {
        animation: checkmark 0.3s ease-in-out;
      }

      @keyframes checkmark {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class FilterSidebarComponent implements OnInit {
  @Input() isMobileOverlay = false;
  @Input() onApplyFilters?: () => void;

  filters = {
    priceRange: "all",
    patternType: "all",
    search: "",
  };

  priceOptions = [
    { value: "all", label: "All Prices", description: "Show everything" },
    {
      value: "under1000",
      label: "Under ₹1,000",
      description: "Budget friendly",
    },
    { value: "1000to5000", label: "₹1,000 - ₹5,000", description: "Mid range" },
    { value: "above5000", label: "Above ₹5,000", description: "Premium tier" },
  ];

  patternOptions = [
    {
      value: "all",
      label: "All Patterns",
      icon: "🎯",
      description: "Show all types",
    },
    {
      value: "Repeating",
      label: "Repeating",
      icon: "🔁",
      description: "e.g., 777, 8888",
    },
    {
      value: "VIP",
      label: "VIP",
      icon: "👑",
      description: "Exclusive numbers",
    },
    {
      value: "Custom",
      label: "Custom",
      icon: "✨",
      description: "Unique patterns",
    },
  ];

  popularSearches = ["777", "888", "999", "000", "123"];

  componentId = Math.random().toString(36).substring(2, 9);
  private filteredCount = 0;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.numberService.filterOptions$.subscribe((filters) => {
      this.filters = filters;
    });

    this.numberService.getFilteredNumbers().subscribe((numbers) => {
      this.filteredCount = numbers.length;
    });
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

  applyFilters(): void {
    if (this.onApplyFilters) {
      this.onApplyFilters();
    }
  }

  getActiveFiltersCount(): number {
    let count = 0;
    if (this.filters.priceRange !== "all") count++;
    if (this.filters.patternType !== "all") count++;
    if (this.filters.search) count++;
    return count;
  }

  getFilteredCount(): number {
    return this.filteredCount;
  }
}
