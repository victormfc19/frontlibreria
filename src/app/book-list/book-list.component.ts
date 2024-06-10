import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookService } from 'app/book.service';
import { ReservaService } from 'app/reserva.service';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  constructor(
    private bookService: BookService,
    private reservaService: ReservaService
  ) { }

  books: any[] = [];

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    })
  }

  borrowBook(book: any, documentInput: HTMLInputElement) {
    const {id} = book;
    const document_client = documentInput.value;

    console.log(`Documento del cliente --> ${document_client}`);
    
    
    if(!document_client){
      alert("No ha ingresado un documento");
      return;
    }
    const body = {
      idBook: id,
      cliente_id: document_client
    }

    this.reservaService.borrowBook(body).subscribe(data => {
      console.log(`respuesta --> ${data}`);
      window.location.reload();
    }, error => {
      console.log(`El error es --> ${error.status}, ${error.message}`);
      alert("Al parecer el documento no es correcto, o el Stock del libro llego a 0.");
    })
  
  }
}
