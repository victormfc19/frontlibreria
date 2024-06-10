import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './app/book-card/book-card.component';
import { BookListComponent } from './app/book-list/book-list.component';
import { AppComponent } from './app/app.component';
import { BorrowBookComponent } from './app/borrow-book/borrow-book.component';
import { AppRoutingModule } from 'app/app.routes';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    BorrowBookComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
