import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBookModel} from "../../../models/book.model";
import {BookService} from "../../../services/book/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Array<IBookModel>
  @Input() searchBox;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.searchBox = localStorage.getItem('search-title') !== null? localStorage.getItem('search-title') : ''
    this.getAllBooks()
  }
  @Output() removeBookSuccess = new EventEmitter()
  removeBook(id: number) {
    this.bookService.removeBook(id).subscribe((data: {success: boolean, message: string}) => {
      if(data.success) {
        this.getAllBooks()
        return
      }
    })
  }

  private getAllBooks() {
    this.bookService.getAllBooks().subscribe((data:{success: boolean, books: Array<IBookModel>}) => {
      if(data.success) {
        this.books = data.books
      }
    })
  }
}
