import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NumberService } from "../../services/number.service";
import { FancyNumber } from "../../models/number.model";
// import { Component, type OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import type { ActivatedRoute, Router } from "@angular/router";
// import { FormsModule } from "@angular/forms";
// import type { NumberService } from "../../services/number.service";
// import type { FancyNumber } from "../../models/number.model";

@Component({
  selector: "app-payment",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        @if (loading) {
        <div class="flex justify-center items-center h-64">
          <div
            class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
          ></div>
        </div>
        } @else if (!number) {
        <div
          class="bg-white rounded-lg shadow-md p-8 text-center max-w-lg mx-auto"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Number Not Found
          </h2>
          <p class="text-gray-600 mb-6">
            The number you're looking for is not available.
          </p>
          <button
            (click)="goBack()"
            class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-colors"
          >
            Back to Numbers
          </button>
        </div>
        } @else {
        <div
          class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="md:flex">
            <!-- Number Details -->
            <div class="md:w-1/2 p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-2">
                Complete Your Purchase
              </h2>
              <p class="text-gray-600 mb-6">
                You're about to purchase this fancy number:
              </p>

              <div class="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 class="text-3xl font-bold text-center mb-4">
                  {{ number.number }}
                </h3>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-2xl font-semibold text-purple-700"
                    >₹{{ number.price.toLocaleString("en-IN") }}</span
                  >
                  <span
                    class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
                    >{{ number.pattern_type }}</span
                  >
                </div>

                <div class="flex flex-wrap gap-2">
                  @for (tag of number.tags; track tag) {
                  <span
                    class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >{{ tag }}</span
                  >
                  }
                </div>
              </div>

              <div class="space-y-4">
                <p class="text-gray-700">
                  <strong>Step 1:</strong> Contact us on WhatsApp.
                </p>
                <p class="text-gray-700">
                  <strong>Step 2:</strong> Scan the QR code to make payment via
                  UPI.
                </p>
                <p class="text-gray-700">
                  <strong>Step 3:</strong> We'll confirm your purchase and
                  arrange the transfer.
                </p>
              </div>

              <!-- WhatsApp Contact Button -->
              <div class="mt-8">
                <a
                  [href]="getWhatsAppLink()"
                  target="_blank"
                  class="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <!-- Payment & QR Codes -->
            <div class="md:w-1/2 bg-gray-50 p-8">
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Scan to Pay
                </h3>
                <div
                  class="bg-white p-4 rounded-lg shadow-sm flex justify-center"
                >
                  <!-- Replace with actual UPI QR code image -->
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                    alt="UPI QR Code"
                    class="h-48 w-48"
                  />
                </div>
                <p class="text-center text-sm text-gray-600 mt-2">
                  UPI ID: paymentfancynumbers
                </p>
              </div>

              <!-- WhatsApp QR Code -->
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Scan to Chat on WhatsApp
                </h3>
                <div
                  class="bg-white p-4 rounded-lg shadow-sm flex justify-center"
                >
                  <img
                    [src]="getWhatsAppQRCode()"
                    alt="WhatsApp QR Code"
                    class="h-48 w-48"
                  />
                </div>
                <p class="text-center text-sm text-gray-600 mt-2">
                  Scan this code to open WhatsApp chat
                </p>
              </div>

              <div class="mt-8 text-center">
                <p class="text-sm text-gray-600">
                  After payment, send us a screenshot with the number you want
                  to purchase.
                  <br />
                  Our team will confirm your purchase and arrange the transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  `,
})
export class PaymentComponent implements OnInit {
  number: FancyNumber | undefined;
  loading = true;

  // Replace with your actual business WhatsApp number (with country code)
  businessWhatsApp = "919309091717"; // Format: country code + number without + or spaces

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private numberService: NumberService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.numberService.getNumberById(id).subscribe((number) => {
        this.number = number;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(["/"]);
  }

  // Generate WhatsApp chat link with pre-filled message
  getWhatsAppLink(): string {
    const message = this.number
      ? `Hello, I'm interested in purchasing the fancy number: ${this.number.number} for ₹${this.number.price}`
      : "Hello, I'm interested in purchasing a fancy number";

    return `https://wa.me/${this.businessWhatsApp}?text=${encodeURIComponent(
      message
    )}`;
  }

  // Generate WhatsApp QR code using QR code API
  getWhatsAppQRCode(): string {
    const whatsappUrl = this.getWhatsAppLink();
    // Using Google Chart API to generate QR code
    return `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(
      whatsappUrl
    )}&chs=300x300&choe=UTF-8&chld=L|2`;
  }
}
