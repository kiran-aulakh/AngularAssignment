import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from 'src/app/login/admin-login/admin-login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { dashboardRoutes } from 'src/app/dashboard/dashboard-routing.module';
import { PageNotFoundComponent } from 'src/app/shared/pagenotfound/page-not-found/page-not-found.component';
import { LoginModule } from 'src/app/login/login.module';
import { PageNotFoundModule } from 'src/app/shared/pagenotfound/pagenotfound.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';

const routes : Routes = [
  {
    path:'',
    redirectTo: 'covid/dashboard',
    pathMatch:'full'
  },
  {
    path:'covid',
    redirectTo: 'covid/dashboard',
    pathMatch:'full'
  },
  {
    path:'login',
    component: AdminLoginComponent
  },
  {
    path: 'covid',
    component : DashboardComponent,
    children: [...dashboardRoutes]
  },
  {
    path: '**',
    component : PageNotFoundComponent,
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    PageNotFoundModule,
    DashboardModule
  ],
  exports: [
    RouterModule,
    LoginModule,
    PageNotFoundModule,
    DashboardModule
  ]
})

export class AppRoutingModule { }