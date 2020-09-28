import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book/book.service";
import {IBookModel} from "../../../models/book.model";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  book: IBookModel;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.params.slug)
      .subscribe((data: { success: boolean, book?: IBookModel, message?: string }) => {
        if (data.success) {
          this.book = data.book
        }
      })
  }


  submit(book) {
    this.bookService.updateBook(book.id, book)
      .subscribe((data: { success: boolean, message: string }) => {
        if (data.success) {
          this.router.navigate(['/'])
        }
      })
  }
}
