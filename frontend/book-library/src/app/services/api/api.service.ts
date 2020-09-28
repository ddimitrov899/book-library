import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path) {
    return this.http.get(`${environment.apiUrl}${path}`)
  }

  post(path, data){
    return this.http.post(`${environment.apiUrl}${path}`, data)
  }

  put(path, data) {
    return this.http.put(`${environment.apiUrl}${path}`, data)
  }

  delete(path, id) {
    return this.http.delete(`${environment.apiUrl}${path}/${id}`)
  }
}
