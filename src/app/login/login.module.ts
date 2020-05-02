import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from '../core/services/admin-user-in-memory-data.service';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLoginDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class LoginModule { }
