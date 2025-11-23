import { Component, type OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberCardComponent } from "../../components/number-card/number-card.component";
import { FilterSidebarComponent } from "../../components/filter-sidebar/filter-sidebar.component";
import { NumberService } from "../../services/number.service";
import { FancyNumber } from "../../models/number.model";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NumberCardComponent, FilterSidebarComponent],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "600ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
    trigger("staggerAnimation", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "scale(0.9)" }),
            stagger(100, [
              animate(
                "400ms ease-out",
                style({ opacity: 1, transform: "scale(1)" })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  template: `
    <!-- Hero Section with Parallax Effect -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 py-20 sm:py-32"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-1/2 -right-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        ></div>
        <div
          class="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Animated Badge -->
          <div
            class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-slow"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
              ></span>
            </span>
            <span class="text-white text-sm font-medium"
              >{{ totalNumbers }}+ Premium Numbers Available</span
            >
          </div>

          <!-- Main Heading with Gradient Text -->
          <h1
            class="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span class="block text-white animate-fade-in-up">Unlock Your</span>
            <span
              class="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-200"
              >Premium Identity</span
            >
          </h1>

          <!-- Rotating Quotes -->
          <div class="h-20 mb-8 flex items-center justify-center">
            <p
              class="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl animate-fade-in-up animation-delay-400"
            >
              {{ currentQuote }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600"
          >
            <a
              href="#explore"
              class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-900 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/50"
            >
              <span class="relative z-10 flex items-center">
                🚀 Explore Premium Numbers
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Learn How It Works
            </a>
          </div>

          <!-- Trust Indicators -->
          <div
            class="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-800"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">
                {{ animatedStats.customers }}+
              </div>
              <div class="text-sm text-white/70">Happy Customers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">
                {{ animatedStats.numbers }}+
              </div>
              <div class="text-sm text-white/70">Premium Numbers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">
                {{ animatedStats.rating }}
              </div>
              <div class="text-sm text-white/70">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          class="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Category Chips with Hover Effects -->
    <div
      class="bg-gradient-to-r from-gray-50 to-gray-100 py-6 sm:py-8 border-b border-gray-200"
    >
      <div
        class="container mx-auto px-4 text-center flex flex-wrap justify-center gap-3"
      >
        <span
          *ngFor="let category of categories; let i = index"
          class="group relative px-5 py-2.5 text-sm font-semibold rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          [style.animation-delay]="i * 100 + 'ms'"
          [ngClass]="category.classes"
        >
          <span class="relative z-10"
            >{{ category.icon }} {{ category.name }}</span
          >
          <span
            class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            [ngClass]="category.hoverClasses"
          ></span>
        </span>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Numbers?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium selection and exceptional
            service
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            *ngFor="let feature of features"
            class="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500"
              [ngClass]="feature.gradientClasses"
            ></div>
            <div class="relative z-10">
              <div
                class="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
              >
                {{ feature.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Listings Section -->
    <section id="explore" class="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- Mobile Filter Header -->
        <div class="lg:hidden mb-6 animate-fade-in">
          <div
            class="flex justify-between items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
          >
            <div class="flex items-center space-x-4">
              <h2 class="text-lg font-semibold text-gray-800">
                <span
                  class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {{ numbers.length }}
                </span>
                <span class="text-gray-600">Numbers</span>
              </h2>
              <div class="text-xs text-gray-500">
                {{ getActiveFiltersText() }}
              </div>
            </div>
            <button
              (click)="toggleMobileFilters()"
              class="relative flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
              <span class="font-semibold">Filters</span>
              <span
                *ngIf="activeFiltersCount > 0"
                class="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse"
              >
                {{ activeFiltersCount }}
              </span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Desktop Sidebar Filters -->
          <div class="lg:col-span-1 hidden lg:block animate-fade-in">
            <div class="sticky top-4">
              <app-filter-sidebar
                [isMobileOverlay]="false"
              ></app-filter-sidebar>
            </div>
          </div>

          <!-- Mobile Filters Overlay -->
          <div
            class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300"
            [class.opacity-0]="!mobileFiltersOpen"
            [class.pointer-events-none]="!mobileFiltersOpen"
            [class.opacity-100]="mobileFiltersOpen"
            (click)="closeMobileFilters()"
          >
            <div
              class="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-out"
              [class.translate-x-full]="!mobileFiltersOpen"
              [class.translate-x-0]="mobileFiltersOpen"
              (click)="$event.stopPropagation()"
            >
              <div
                class="flex justify-between items-center p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              >
                <h3 class="text-xl font-bold">Filter Numbers</h3>
                <button
                  (click)="closeMobileFilters()"
                  class="text-white hover:text-gray-200 transition-colors transform hover:rotate-90 duration-300"
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
            <div class="flex flex-col justify-center items-center h-64">
              <div class="relative">
                <div
                  class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    class="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                  ></div>
                </div>
              </div>
              <p class="mt-4 text-gray-600 font-medium animate-pulse">
                Loading premium numbers...
              </p>
            </div>
            } @else if (numbers.length === 0) {
            <div
              class="bg-white rounded-2xl shadow-xl p-12 text-center animate-fade-in"
            >
              <div class="mb-6 relative">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="h-32 w-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full animate-pulse"
                  ></div>
                </div>
                <svg
                  class="relative mx-auto h-24 w-24 text-gray-400"
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
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                No numbers found
              </h3>
              <p class="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find any numbers matching your criteria. Try
                adjusting your filters to see more results.
              </p>
              <button
                (click)="clearAllFilters()"
                class="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <svg
                  class="w-5 h-5 mr-2"
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
                Clear All Filters
              </button>
            </div>
            } @else {
            <!-- Results Summary for Desktop -->
            <div
              class="hidden lg:flex justify-between items-center mb-6 animate-fade-in"
            >
              <div class="flex items-center space-x-4">
                <p class="text-gray-700 font-medium">
                  Showing
                  <span class="text-purple-600 font-bold">{{
                    numbers.length
                  }}</span>
                  of <span class="font-bold">{{ totalNumbers }}</span> numbers
                </p>
                <div class="h-6 w-px bg-gray-300"></div>
                <div class="text-sm text-gray-500">
                  {{ getActiveFiltersText() }}
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Sort by:</span>
                <select
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                >
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              [@staggerAnimation]="numbers.length"
            >
              @for (number of numbers; track number.id) {
              <app-number-card [number]="number" [@fadeIn]></app-number-card>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      class="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p class="text-lg text-gray-600">
            Join thousands of satisfied customers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            *ngFor="let testimonial of testimonials"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div class="flex items-center mb-4">
              <div
                *ngFor="let star of [1, 2, 3, 4, 5]"
                class="text-yellow-400 text-xl"
              >
                ⭐
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center">
              <div
                class="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg"
              >
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="ml-4">
                <div class="font-semibold text-gray-900">
                  {{ testimonial.name }}
                </div>
                <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 text-white py-20"
    >
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="absolute top-0 left-0 w-full h-full">
          <div
            class="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          ></div>
          <div
            class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <h2 class="text-3xl sm:text-5xl font-black mb-6">
          Ready to Stand Out? 🎯
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Don't settle for ordinary. Your premium number is waiting. Make it
          yours today!
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#explore"
            class="group inline-flex items-center bg-white text-purple-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
          >
            🔍 Browse Premium Numbers
            <svg
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            💬 Contact Us
          </a>
        </div>

        <!-- Trust badges -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Secure Checkout</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
            <span>24/7 Support</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Instant Activation</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes blob {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        25% {
          transform: translate(20px, -20px) scale(1.1);
        }
        50% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        75% {
          transform: translate(-20px, -20px) scale(1.05);
        }
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .animate-bounce-slow {
        animation: bounce 3s infinite;
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }

      .animation-delay-200 {
        animation-delay: 0.2s;
        opacity: 0;
      }

      .animation-delay-400 {
        animation-delay: 0.4s;
        opacity: 0;
      }

      .animation-delay-600 {
        animation-delay: 0.6s;
        opacity: 0;
      }

      .animation-delay-800 {
        animation-delay: 0.8s;
        opacity: 0;
      }

      .animate-fade-in {
        animation: fade-in-up 0.6s ease-out;
      }
    `,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  numbers: FancyNumber[] = [];
  totalNumbers = 0;
  loading = true;
  mobileFiltersOpen = false;
  currentFilters: any = {};
  activeFiltersCount = 0;

  // Rotating quotes
  quotes = [
    "Stand out with a number that reflects your unique identity 💎",
    "Make every call memorable with a premium number ⭐",
    "Your number, your brand, your success story 🚀",
    "Elevate your professional image instantly 📱",
    "Numbers that leave a lasting impression 🎯",
  ];
  currentQuote = this.quotes[0];
  private quoteInterval: any;

  // Animated statistics
  animatedStats = {
    customers: 0,
    numbers: 0,
    rating: 0,
  };
  private statsInterval: any;

  // Categories with enhanced styling
  categories = [
    {
      name: "VIP Numbers",
      icon: "👑",
      classes: "bg-purple-100 text-purple-700",
      hoverClasses: "bg-purple-200",
    },
    {
      name: "Business Numbers",
      icon: "💼",
      classes: "bg-pink-100 text-pink-700",
      hoverClasses: "bg-pink-200",
    },
    {
      name: "Lucky Numbers",
      icon: "🍀",
      classes: "bg-yellow-100 text-yellow-800",
      hoverClasses: "bg-yellow-200",
    },
    {
      name: "Mirror Patterns",
      icon: "🪞",
      classes: "bg-green-100 text-green-700",
      hoverClasses: "bg-green-200",
    },
    {
      name: "Sequential",
      icon: "🔢",
      classes: "bg-blue-100 text-blue-700",
      hoverClasses: "bg-blue-200",
    },
    {
      name: "Premium",
      icon: "💎",
      classes: "bg-indigo-100 text-indigo-700",
      hoverClasses: "bg-indigo-200",
    },
  ];

  // Features
  features = [
    {
      icon: "⚡",
      title: "Instant Activation",
      description:
        "Get your premium number activated within minutes. No waiting, no hassle.",
      gradientClasses: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🔒",
      title: "Secure & Verified",
      description:
        "All numbers are verified and come with secure transfer protocols.",
      gradientClasses: "from-green-400 to-blue-500",
    },
    {
      icon: "💯",
      title: "Best Price Guarantee",
      description:
        "Competitive pricing with transparent costs. No hidden fees ever.",
      gradientClasses: "from-purple-400 to-pink-500",
    },
    {
      icon: "🎯",
      title: "Perfect Match",
      description:
        "Advanced filters to help you find the exact number you envision.",
      gradientClasses: "from-red-400 to-pink-500",
    },
    {
      icon: "🌟",
      title: "Premium Quality",
      description:
        "Handpicked collection of the most sought-after number patterns.",
      gradientClasses: "from-blue-400 to-indigo-500",
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description:
        "Dedicated support team ready to assist you anytime, anywhere.",
      gradientClasses: "from-teal-400 to-green-500",
    },
  ];

  // Testimonials
  testimonials = [
    {
      text: "My business calls increased by 40% after switching to this premium number. Clients remember it instantly!",
      name: "Rajesh Kumar",
      role: "Business Owner",
    },
    {
      text: "The process was seamless and the number quality is outstanding. Best investment for my personal brand.",
      name: "Priya Sharma",
      role: "Entrepreneur",
    },
    {
      text: "Professional service and amazing selection. Found the perfect VIP number for my consultancy.",
      name: "Amit Patel",
      role: "Consultant",
    },
  ];

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    // Subscribe to all numbers to get total count
    this.numberService.numbers$.subscribe((allNumbers) => {
      this.totalNumbers = allNumbers.length;
      this.animateStats();
    });

    // Subscribe to filtered numbers
    this.numberService.getFilteredNumbers().subscribe((numbers) => {
      this.numbers = numbers;
      this.loading = false;
    });

    // Subscribe to filter changes
    this.numberService.filterOptions$.subscribe((filters) => {
      this.currentFilters = filters;
      this.calculateActiveFilters();
    });

    // Start quote rotation
    this.startQuoteRotation();
  }

  ngOnDestroy(): void {
    if (this.quoteInterval) {
      clearInterval(this.quoteInterval);
    }
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
    }
  }

  private startQuoteRotation(): void {
    let index = 0;
    this.quoteInterval = setInterval(() => {
      index = (index + 1) % this.quotes.length;
      this.currentQuote = this.quotes[index];
    }, 4000);
  }

  private animateStats(): void {
    const targetCustomers = 5000;
    const targetNumbers = this.totalNumbers || 1000;
    const targetRating = 4.9;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    this.statsInterval = setInterval(() => {
      step++;
      const progress = step / steps;

      this.animatedStats.customers = Math.floor(targetCustomers * progress);
      this.animatedStats.numbers = Math.floor(targetNumbers * progress);
      this.animatedStats.rating = Number((targetRating * progress).toFixed(1));

      if (step >= steps) {
        this.animatedStats.customers = targetCustomers;
        this.animatedStats.numbers = targetNumbers;
        this.animatedStats.rating = targetRating;
        clearInterval(this.statsInterval);
      }
    }, interval);
  }

  private calculateActiveFilters(): void {
    let count = 0;
    if (
      this.currentFilters.priceRange &&
      this.currentFilters.priceRange !== "all"
    )
      count++;
    if (
      this.currentFilters.patternType &&
      this.currentFilters.patternType !== "all"
    )
      count++;
    if (this.currentFilters.search) count++;
    this.activeFiltersCount = count;
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
