import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../../services/book/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {


  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  submit(book) {
    this.bookService.createBook(book)
      .subscribe((data: { success: boolean, message: string }) => {
        if (data.success) {
          this.router.navigate(['/'])
        }
      })
  }


}
