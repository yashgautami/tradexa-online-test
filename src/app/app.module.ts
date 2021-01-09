import { SearchPipe } from './shared/pipes/search.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { UserScreenComponent } from './components/user-screen/user-screen.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    UserScreenComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule, RouterModule
  ],
  exports: [SearchComponent,
    TableComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
