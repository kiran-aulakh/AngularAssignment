import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AuthGuard } from '../login/auth-guard';
import { StateDetailsComponent } from './state-details/state-details.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


export const dashboardRoutes: Routes = [
    {path:'precautions',component: PrecautionsComponent},
    {path:'newsDetail',component: NewsDetailComponent},
    {path:'addnews',component : AddNewsComponent,canActivate:[AuthGuard]},
    {path:'view',component: StateDetailsComponent},
    {path:'dashboard',component: DashboardPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class DashBoardRoutingModule { }
