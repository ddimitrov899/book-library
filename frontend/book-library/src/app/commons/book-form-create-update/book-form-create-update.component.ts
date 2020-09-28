import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-form-create-update',
  templateUrl: './book-form-create-update.component.html',
  styleUrls: ['./book-form-create-update.component.scss']
})
export class BookFormCreateUpdateComponent implements OnInit, OnChanges {
  bookForm: FormGroup;
  @Input() bookValue: IBookModel

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.bookValue) {
      Object.entries(this.bookValue).map(value => {
        let [key, valueBook] = value
        if (key === 'Genre') {
          valueBook = valueBook.join(', ')
        }
        this.bookForm.get(key).setValue(valueBook)
      })
    }
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      id: [0],
      Title: ['', Validators.required],
      Slug: ['', Validators.required],
      Author: ['', Validators.required],
      Publisher: ['', Validators.required],
      Thumbnail: ['', Validators.required],
      Genre: ['', Validators.required],
      Description: ['', Validators.required],
    })
  }

  get f() {
    return this.bookForm.controls;
  }

  slugChange(slug) {
    this.bookForm.get('Slug').setValue(slug.value)
  }


  changeListener($event): void {
    this.readThis($event.target);
  }

  private readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.bookForm.get('Thumbnail').setValue(myReader.result);
    }
    myReader.readAsDataURL(file);
  }

  @Output() book = new EventEmitter()

  submit() {
    if (this.bookForm.valid) {
      this.bookForm.get('Genre').setValue(this.f.Genre.value.split(/,\s+|\s+/g))
      this.book.next(this.bookForm.value)
    }
  }
}
