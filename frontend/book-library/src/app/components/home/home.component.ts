import {Component, Input, OnInit} from '@angular/core';
import {IBookModel} from "../../models/book.model";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchBox: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSearchTitle(title: string) {
    this.searchBox = title
  }


}
