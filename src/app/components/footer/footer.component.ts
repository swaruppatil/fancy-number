import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Newsletter Section -->
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay Updated! 📬
          </h3>
          <p class="text-white/90 mb-6">
            Get notified about new premium numbers and exclusive deals
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              class="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            />
            <button
              class="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Subscribe
            </button>
          </div>
          <p class="text-xs text-white/70 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <div class="mb-4">
              <h2 class="text-2xl font-bold text-white mb-2 flex items-center">
                <span
                  class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Fancy
                </span>
                <span
                  class="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent ml-1"
                >
                  Numbers
                </span>
              </h2>
              <div
                class="inline-block px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded"
              >
                PREMIUM
              </div>
            </div>
            <p class="text-sm mb-4">
              Your trusted marketplace for premium mobile numbers. Stand out
              with a number that defines you.
            </p>
            <div class="flex space-x-3">
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a
                  routerLink="/"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">→</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#explore"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">→</span> Browse Numbers
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">→</span> How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">→</span> Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">→</span> FAQs
                </a>
              </li>
            </ul>
          </div>

          <!-- Categories -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Categories</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">👑</span> VIP Numbers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">💼</span> Business Numbers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">🍀</span> Lucky Numbers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">🪞</span> Mirror Patterns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-purple-400 transition-colors flex items-center"
                >
                  <span class="mr-2">💎</span> Premium Selection
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 mr-2 mt-0.5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <p class="text-sm">+91 98765 43210</p>
                  <p class="text-xs text-gray-500">Available 24/7</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 mr-2 mt-0.5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <p class="text-sm">support&#64;choicenumberhub.com</p>
                  <p class="text-xs text-gray-500">Quick response</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 mr-2 mt-0.5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <p class="text-sm">Nagpur, Maharashtra</p>
                  <p class="text-xs text-gray-500">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="border-t border-gray-800 pt-8 mt-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div
              class="flex items-center justify-center p-4 bg-gray-800 rounded-lg"
            >
              <svg
                class="w-6 h-6 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <div class="text-white font-semibold text-sm">Secure</div>
                <div class="text-xs text-gray-400">SSL Encrypted</div>
              </div>
            </div>
            <div
              class="flex items-center justify-center p-4 bg-gray-800 rounded-lg"
            >
              <svg
                class="w-6 h-6 text-blue-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <div>
                <div class="text-white font-semibold text-sm">24/7 Support</div>
                <div class="text-xs text-gray-400">Always here</div>
              </div>
            </div>
            <div
              class="flex items-center justify-center p-4 bg-gray-800 rounded-lg"
            >
              <svg
                class="w-6 h-6 text-yellow-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <div>
                <div class="text-white font-semibold text-sm">Top Rated</div>
                <div class="text-xs text-gray-400">4.9/5 Stars</div>
              </div>
            </div>
            <div
              class="flex items-center justify-center p-4 bg-gray-800 rounded-lg"
            >
              <svg
                class="w-6 h-6 text-purple-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <div class="text-white font-semibold text-sm">Fast</div>
                <div class="text-xs text-gray-400">Instant Delivery</div>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div
            class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p class="text-sm text-gray-500">
              © 2024 Fancy Numbers. All rights reserved.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" class="hover:text-purple-400 transition-colors"
                >Privacy Policy</a
              >
              <span class="text-gray-700">•</span>
              <a href="#" class="hover:text-purple-400 transition-colors"
                >Terms of Service</a
              >
              <span class="text-gray-700">•</span>
              <a href="#" class="hover:text-purple-400 transition-colors"
                >Refund Policy</a
              >
              <span class="text-gray-700">•</span>
              <a href="#" class="hover:text-purple-400 transition-colors"
                >Sitemap</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button
      *ngIf="showBackToTop"
      (click)="scrollToTop()"
      class="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 z-40 animate-bounce"
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
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  `,
  styles: [
    `
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-bounce {
        animation: bounce 2s infinite;
      }
    `,
  ],
})
export class FooterComponent {
  showBackToTop = false;

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        this.showBackToTop = window.pageYOffset > 300;
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
