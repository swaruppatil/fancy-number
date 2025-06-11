import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Fancy Numbers</h3>
            <p class="text-gray-300">
              Premium mobile numbers for those who want to stand out.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="/" class="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#contact" class="text-gray-300 hover:text-white"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Phone: +91 98765 43210</li>
              <li>Email: infofancynumbers.com</li>
              <li>WhatsApp: +91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div
          class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400"
        >
          <p>&copy; {{ currentYear }} Fancy Numbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
