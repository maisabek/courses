import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './services/auth/auth.interceptor';
import { CoursesComponent } from './components/courses/courses.component';
import { NgwWowModule } from 'ngx-wow';
import {MatMenuModule} from '@angular/material/menu'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgwWowModule,
    MatMenuModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
