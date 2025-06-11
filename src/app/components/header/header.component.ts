// import { Component } from "@angular/core"
// import { RouterLink } from "@angular/router"

// @Component({
//   selector: "app-header",
//   standalone: true,
//   imports: [RouterLink],
//   template: `
//     <header class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//       <div class="container mx-auto px-4 py-4 flex justify-between items-center">
//         <a routerLink="/" class="text-2xl font-bold flex items-center">
//           <span>Fancy</span>
//           <span class="text-yellow-300 ml-1">Numbers</span>
//         </a>
//         <nav>
//           <ul class="flex space-x-6">
//             <li><a routerLink="/" class="hover:text-yellow-300 transition-colors">Home</a></li>
//             <li><a href="#contact" class="hover:text-yellow-300 transition-colors">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   `,
// })
// export class HeaderComponent {}

import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink],
  template: `
    <header
      class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
    >
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <a routerLink="/" class="flex items-center">
          <!-- Responsive Logo -->
          <img
            src="assets/logo.png"
            alt="Fancy Numbers Logo"
            class="h-8 sm:h-10 md:h-12 w-auto max-w-32 sm:max-w-48 md:max-w-64 object-contain transition-all duration-300"
            (error)="onImageError($event)"
          />
          <!-- Fallback text -->
          <span
            class="text-xl sm:text-2xl font-bold ml-2 hidden"
            id="fallback-text"
          >
            <span>Fancy</span>
            <span class="text-yellow-300 ml-1">Numbers</span>
          </span>
        </a>
        <nav class="hidden sm:block">
          <ul class="flex space-x-6">
            <li>
              <a routerLink="/" class="hover:text-yellow-300 transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a href="#contact" class="hover:text-yellow-300 transition-colors"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
        <!-- Mobile menu button -->
        <button
          class="sm:hidden text-white hover:text-yellow-300"
          (click)="toggleMobileMenu()"
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div class="sm:hidden" [class.hidden]="!mobileMenuOpen">
        <div class="px-4 py-2 space-y-2 bg-purple-700">
          <a
            routerLink="/"
            class="block hover:text-yellow-300 transition-colors"
            (click)="closeMobileMenu()"
            >Home</a
          >
          <a
            href="#contact"
            class="block hover:text-yellow-300 transition-colors"
            (click)="closeMobileMenu()"
            >Contact</a
          >
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  mobileMenuOpen = false;

  // Handle image loading error - show fallback text
  onImageError(event: any): void {
    const img = event.target;
    const fallbackText = document.getElementById("fallback-text");

    // Hide the broken image
    img.style.display = "none";

    // Show the fallback text
    if (fallbackText) {
      fallbackText.classList.remove("hidden");
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
