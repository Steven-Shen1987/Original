import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { UserrComponent } from './userr/userr.component';
import { FormsModule } from '@angular/forms';
import { TestformComponent } from './testform/testform.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

const ROUTES = [
  { path: 'user', component: UserrComponent },
  { path: 'form', component: TestformComponent },
  { path: 'test', component: TestComponent },
  // { path: 'notes',
  //   children: [
  //     { path: '', component: NotesComponent },
  //     { path: ':id', component: NoteComponent }
  //   ]
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    UserrComponent,
    TestformComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
