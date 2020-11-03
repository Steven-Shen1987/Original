import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { UserrComponent } from './userr/userr.component';
import { FormsModule } from '@angular/forms';
import { TestformComponent } from './testform/testform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserrComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
