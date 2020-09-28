import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private api: ApiService) {
  }

  getAllBooks() {
    return this.api.get('book/books')
  }

  getBook(slug) {
    return this.api.get(`book/${slug}`)
  }

  createBook(data) {
    return this.api.post('book/create', data)
  }

  updateBook(id, data) {
    return this.api.put(`book/update/${id}`, data)
  }

  removeBook(id) {
    return this.api.delete('book', id)
  }
}
