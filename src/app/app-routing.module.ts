import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { OthersComponent } from './pages/others/others.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent},
  {path: 'others', component: OthersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
