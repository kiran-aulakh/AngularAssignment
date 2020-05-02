import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AppMaterialModule } from '../app-material.module';
import { StateDetailsComponent } from './state-details/state-details.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SearchPipe } from './dashboard-page/search.pipe';

@NgModule({
  declarations: [DashboardComponent, AddNewsComponent, PrecautionsComponent, NewsDetailComponent, StateDetailsComponent, DashboardPageComponent, SearchPipe],
  imports: [
    CommonModule,
    LoginModule,
    DashBoardRoutingModule,
    AppMaterialModule
  ],
  exports: [
    DashboardComponent,
    DashBoardRoutingModule
  ]
})

export class DashboardModule {
  constructor() {
    console.log("Dashboard Module loaded.");
  }
 }
