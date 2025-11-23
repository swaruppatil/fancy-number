import { Component, HostListener } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{
        'bg-white/95 backdrop-blur-md shadow-lg': isScrolled,
        'bg-gradient-to-r from-purple-600 to-indigo-600': !isScrolled
      }"
    >
      <div
        *ngIf="!isScrolled && showBanner"
        class="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white py-2 px-4 text-center text-sm font-medium"
      >
        <div
          class="container mx-auto flex items-center justify-center space-x-2"
        >
          <span class="animate-pulse">🎉</span>
          <span>Limited Time Offer: Get 20% OFF on all Premium Numbers!</span>
          <button (click)="closeBanner()" class="ml-4 hover:text-gray-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a
            routerLink="/"
            class="flex items-center space-x-3 group transform transition-transform duration-300 hover:scale-105"
          >
            <div class="relative">
              <img
                src="assets/logo.png"
                alt="Fancy Numbers"
                [ngClass]="{
                  'brightness-0 invert': isScrolled
                }"
                class="h-10 sm:h-12 w-auto max-w-48 object-contain transition-all duration-300"
                (error)="onImageError($event)"
              />

              <div class="flex items-center" [class.hidden]="!showFallbackLogo">
                <div class="text-2xl sm:text-3xl font-black">
                  <span
                    [ngClass]="{
                      'text-white': !isScrolled,
                      'text-purple-600': isScrolled
                    }"
                    >Fancy</span
                  >
                  <span
                    [ngClass]="{
                      'text-yellow-300': !isScrolled,
                      'text-pink-600': isScrolled
                    }"
                    >Numbers</span
                  >
                </div>
                <div
                  class="ml-2 px-2 py-0.5 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full"
                >
                  PREMIUM
                </div>
              </div>
            </div>

            <div class="hidden sm:block">
              <div class="flex flex-col -space-y-1">
                <span
                  class="text-xs font-semibold uppercase tracking-wider"
                  [ngClass]="{
                    'text-yellow-300': !isScrolled,
                    'text-purple-600': isScrolled
                  }"
                >
                  Premium
                </span>
                <span
                  class="text-xs font-medium"
                  [ngClass]="{
                    'text-white': !isScrolled,
                    'text-gray-600': isScrolled
                  }"
                >
                  Since 2024
                </span>
              </div>
            </div>
          </a>

          <nav class="hidden md:flex items-center space-x-8">
            <a
              routerLink="/"
              class="relative font-semibold transition-all duration-300 group"
              [ngClass]="{
                'text-white hover:text-yellow-300': !isScrolled,
                'text-gray-700 hover:text-purple-600': isScrolled
              }"
            >
              Home
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#explore"
              class="relative font-semibold transition-all duration-300 group"
              [ngClass]="{
                'text-white hover:text-yellow-300': !isScrolled,
                'text-gray-700 hover:text-purple-600': isScrolled
              }"
            >
              Browse Numbers
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#how-it-works"
              class="relative font-semibold transition-all duration-300 group"
              [ngClass]="{
                'text-white hover:text-yellow-300': !isScrolled,
                'text-gray-700 hover:text-purple-600': isScrolled
              }"
            >
              How It Works
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#contact"
              class="relative font-semibold transition-all duration-300 group"
              [ngClass]="{
                'text-white hover:text-yellow-300': !isScrolled,
                'text-gray-700 hover:text-purple-600': isScrolled
              }"
            >
              Contact
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#explore"
              class="relative inline-flex items-center px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group"
              [ngClass]="{
                'bg-yellow-400 text-purple-900 hover:bg-yellow-300':
                  !isScrolled,
                'bg-gradient-to-r from-purple-600 to-pink-600 text-white':
                  isScrolled
              }"
            >
              <span class="relative z-10 flex items-center"
                >🔥 Get Started</span
              >
              <span
                class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              ></span>
            </a>
          </nav>

          <button
            (click)="toggleMobileMenu()"
            class="md:hidden relative p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
            [ngClass]="{
              'text-white hover:bg-white/10': !isScrolled,
              'text-gray-700 hover:bg-gray-100': isScrolled
            }"
          >
            <svg
              *ngIf="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              *ngIf="mobileMenuOpen"
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

        <div
          class="md:hidden overflow-hidden transition-all duration-300"
          [ngClass]="{ 'max-h-0': !mobileMenuOpen, 'max-h-96': mobileMenuOpen }"
        >
          <div
            class="pt-4 pb-2 space-y-2 rounded-lg mt-4 px-4"
            [ngClass]="{
              'bg-purple-700': !isScrolled,
              'bg-gray-50': isScrolled
            }"
          >
            <a
              routerLink="/"
              (click)="closeMobileMenu()"
              class="block py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              [ngClass]="{
                'text-white hover:bg-white/10': !isScrolled,
                'text-gray-700 hover:bg-purple-100': isScrolled
              }"
            >
              🏠 Home
            </a>
            <a
              href="#explore"
              (click)="closeMobileMenu()"
              class="block py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              [ngClass]="{
                'text-white hover:bg-white/10': !isScrolled,
                'text-gray-700 hover:bg-purple-100': isScrolled
              }"
            >
              🔍 Browse Numbers
            </a>
            <a
              href="#how-it-works"
              (click)="closeMobileMenu()"
              class="block py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              [ngClass]="{
                'text-white hover:bg-white/10': !isScrolled,
                'text-gray-700 hover:bg-purple-100': isScrolled
              }"
            >
              💡 How It Works
            </a>
            <a
              href="#contact"
              (click)="closeMobileMenu()"
              class="block py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              [ngClass]="{
                'text-white hover:bg-white/10': !isScrolled,
                'text-gray-700 hover:bg-purple-100': isScrolled
              }"
            >
              📞 Contact
            </a>
            <a
              href="#explore"
              (click)="closeMobileMenu()"
              class="block py-3 px-4 mt-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 font-bold rounded-lg text-center hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105"
            >
              🔥 Get Started Now
            </a>
          </div>
        </div>
      </div>
    </header>

    <div [style.height.px]="headerHeight"></div>
  `,
  styles: [
    `
      header {
        will-change: transform, background-color;
      }
    `,
  ],
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isScrolled = false;
  showBanner = true;
  showFallbackLogo = false;
  headerHeight = 80;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  onImageError(event: any): void {
    event.target.style.display = "none";
    this.showFallbackLogo = true;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  closeBanner(): void {
    this.showBanner = false;
  }
}
