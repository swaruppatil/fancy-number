import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { PaymentComponent } from "./pages/payment/payment.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "payment/:id", component: PaymentComponent },
  { path: "**", redirectTo: "" },
]
