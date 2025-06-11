import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { HomeComponent } from "./pages/home/home.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // App initialization logic
  }
}
