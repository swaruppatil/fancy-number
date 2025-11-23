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
      class="bg-white rounded-lg shadow-md p-4"
      [class.shadow-none]="isMobileOverlay"
    >
      <h2 class="text-xl font-bold mb-4" [class.hidden]="isMobileOverlay">
        Filters
      </h2>

      <!-- Price Range Filter -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Price Range</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <input
              type="radio"
              id="price-all-{{ componentId }}"
              name="priceRange-{{ componentId }}"
              value="all"
              [checked]="filters.priceRange === 'all'"
              (change)="updatePriceFilter('all')"
              class="mr-2"
            />
            <label for="price-all-{{ componentId }}">All Prices</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-under1000-{{ componentId }}"
              name="priceRange-{{ componentId }}"
              value="under1000"
              [checked]="filters.priceRange === 'under1000'"
              (change)="updatePriceFilter('under1000')"
              class="mr-2"
            />
            <label for="price-under1000-{{ componentId }}">Under ₹1,000</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-1000to5000-{{ componentId }}"
              name="priceRange-{{ componentId }}"
              value="1000to5000"
              [checked]="filters.priceRange === '1000to5000'"
              (change)="updatePriceFilter('1000to5000')"
              class="mr-2"
            />
            <label for="price-1000to5000-{{ componentId }}"
              >₹1,000 - ₹5,000</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="price-above5000-{{ componentId }}"
              name="priceRange-{{ componentId }}"
              value="above5000"
              [checked]="filters.priceRange === 'above5000'"
              (change)="updatePriceFilter('above5000')"
              class="mr-2"
            />
            <label for="price-above5000-{{ componentId }}">Above ₹5,000</label>
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
              id="pattern-all-{{ componentId }}"
              name="patternType-{{ componentId }}"
              value="all"
              [checked]="filters.patternType === 'all'"
              (change)="updatePatternFilter('all')"
              class="mr-2"
            />
            <label for="pattern-all-{{ componentId }}">All Patterns</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-repeating-{{ componentId }}"
              name="patternType-{{ componentId }}"
              value="Repeating"
              [checked]="filters.patternType === 'Repeating'"
              (change)="updatePatternFilter('Repeating')"
              class="mr-2"
            />
            <label for="pattern-repeating-{{ componentId }}">Repeating</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-vip-{{ componentId }}"
              name="patternType-{{ componentId }}"
              value="VIP"
              [checked]="filters.patternType === 'VIP'"
              (change)="updatePatternFilter('VIP')"
              class="mr-2"
            />
            <label for="pattern-vip-{{ componentId }}">VIP</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="pattern-custom-{{ componentId }}"
              name="patternType-{{ componentId }}"
              value="Custom"
              [checked]="filters.patternType === 'Custom'"
              (change)="updatePatternFilter('Custom')"
              class="mr-2"
            />
            <label for="pattern-custom-{{ componentId }}">Custom</label>
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

      <!-- Apply Filters Button (Mobile Only) -->
      <button
        *ngIf="isMobileOverlay"
        (click)="applyFilters()"
        class="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-colors"
      >
        Apply Filters
      </button>
    </div>
  `,
})
export class FilterSidebarComponent implements OnInit {
  @Input() isMobileOverlay = false;
  @Input() onApplyFilters?: () => void;

  filters = {
    priceRange: "all",
    patternType: "all",
    search: "",
  };

  componentId = Math.random().toString(36).substring(2, 9);

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.numberService.filterOptions$.subscribe((filters) => {
      this.filters = filters;
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
}
