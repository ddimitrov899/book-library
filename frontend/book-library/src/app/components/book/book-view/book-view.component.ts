import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../services/book/book.service";
import {IBookModel} from "../../../models/book.model";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  book: IBookModel

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.params.slug)
      .subscribe((data: { success: boolean, book?: IBookModel, message?: string }) => {
        if (data.success) {
          this.book = data.book
        }
      })
  }

}
