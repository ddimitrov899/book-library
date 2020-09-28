import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  constructor() {
  }

  searchTitle = localStorage.getItem('search-title')

  ngOnInit(): void {
  }

  @Output() searchBox = new EventEmitter()

  searchBoxParam($event) {
    this.searchBox.next({searchBox: $event.target.value})
  }
}
