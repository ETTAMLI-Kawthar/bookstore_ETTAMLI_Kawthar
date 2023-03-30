import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/api/books";

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(Book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Book);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  updateBook(Book: Book): Observable<Object>{
    return this.httpClient.put<Book>(`${this.baseURL}/${Book.id}`, Book);
  }

  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getBookByName(name:String): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/name/${name}`);
  }

  getBookByCategory(category:String): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/category/${category}`);
  }
  getBookByAuthor(author:String): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/author/${author}`);
  }
}
