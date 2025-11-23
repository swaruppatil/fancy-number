import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FancyNumber } from "../../models/number.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-number-card",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="p-6">
        <h3 class="text-2xl font-bold text-center mb-3">{{ number.number }}</h3>
        <p class="text-sm text-gray-500 text-center mb-3">
          Digit Sum: {{ getNumberSum() }}
        </p>
        <div class="flex justify-between items-center mb-4">
          <span class="text-xl font-semibold text-purple-700"
            >₹{{ number.price.toLocaleString("en-IN") }}</span
          >
          <span
            class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
            >{{ number.pattern_type }}</span
          >
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          @for (tag of number.tags; track tag) {
          <span
            class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
            >{{ tag }}</span
          >
          }
        </div>

        <a
          [routerLink]="['/payment', number.id]"
          class="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-md text-center font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors"
        >
          Buy Now
        </a>
      </div>
    </div>
  `,
})
export class NumberCardComponent {
  @Input() number!: FancyNumber;
  getNumberSum(): number {
    const rawNumber = this.number.number.replace(/\+91\s*/, ""); // Remove +91 and space
    const digitsOnly = rawNumber.replace(/\D/g, ""); // Remove non-digit characters

    return digitsOnly.split("").reduce((sum, digit) => sum + Number(digit), 0);
  }
}

// import { Component, Input } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { FancyNumber } from "../../models/number.model";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "app-number-card",
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   styles: [
//     `
//       .fade-in-up {
//         animation: fadeInUp 0.5s ease-out;
//       }

//       @keyframes fadeInUp {
//         0% {
//           opacity: 0;
//           transform: translateY(15px);
//         }
//         100% {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
//     `,
//   ],
//   template: `
//     <div
//       class="fade-in-up bg-white rounded-xl shadow-sm ring-1 ring-gray-200 hover:ring-purple-400 hover:shadow-lg transition-all duration-300"
//     >
//       <div class="p-5 flex flex-col h-full justify-between">
//         <!-- Mobile Number -->
//         <h3
//           class="text-2xl font-semibold text-gray-800 text-center tracking-wider mb-3"
//         >
//           {{ number.number }}
//         </h3>

//         <!-- Price & Pattern -->
//         <div class="flex justify-between items-center mb-4">
//           <span class="text-lg font-semibold text-purple-700">
//             ₹{{ number.price.toLocaleString("en-IN") }}
//           </span>
//           <span
//             class="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full"
//           >
//             {{ number.pattern_type }}
//           </span>
//         </div>

//         <!-- Tags -->
//         <div class="flex flex-wrap gap-2 mb-5">
//           @for (tag of number.tags; track tag) {
//           <span
//             class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
//           >
//             {{ tag }}
//           </span>
//           }
//         </div>

//         <!-- CTA -->
//         <a
//           [routerLink]="['/payment', number.id]"
//           class="block w-full text-center font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-indigo-700 transition-colors"
//         >
//           Buy Now
//         </a>
//       </div>
//     </div>
//   `,
// })
// export class NumberCardComponent {
//   @Input() number!: FancyNumber;
// }
