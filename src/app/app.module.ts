import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { AppStudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
