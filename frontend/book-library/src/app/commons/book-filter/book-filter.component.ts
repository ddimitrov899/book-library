import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent implements OnInit {

  @Input() books:IBookModel

  constructor() { }

  ngOnInit(): void {
  }
  @Output() searchBox = new EventEmitter()
  searchTitle(e) {
    this.searchBox.next(e.searchBox)
  }
}
