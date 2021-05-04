import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { DataDetailsComponent } from './components/data-details/data-details.component';
import { DataListComponent } from './components/data-list/data-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'data', component: DataListComponent },
  { path: 'data/:id', component: DataDetailsComponent },
  { path: 'add', component: AddDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
