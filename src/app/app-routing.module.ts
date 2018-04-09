import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiratesComponent } from './pirates/pirates.component';
import { PirateDetailComponent } from './pirate-detail/pirate-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes= [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pirates', component: PiratesComponent},
  {path: 'detail/:id', component: PirateDetailComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
