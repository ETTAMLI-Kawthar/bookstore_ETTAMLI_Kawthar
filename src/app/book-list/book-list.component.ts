import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books: Book[]=[];
  bookName!:String;
  category!: String;
  author!:String;


  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }

  viewBook(id: number){
    this.router.navigate(['bookView', id]);
  }

  updateBook(id: number){
    this.router.navigate(['updateBook', id]);
  }

  deleteBook(id: number){
    alert("Are you sure, you want to delete this book?")
    this.bookService.deleteBook(id).subscribe( data => {
      this.getBooks();
    })
  }

  getBookByName(){
      this.bookService.getBookByName(this.bookName)
      .subscribe({
        next: (data) => {
          this.books = data;
        },
        error: (e) => console.error(e)
      });

  }

  getBookByCategory(){
    if(this.category == "" && this.category == null){
      this.getBooks();
    }
    else{
    this.bookService.getBookByCategory(this.category)
    .subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (e) => console.error(e)
    });
  }
  }
  getBookByAuthor(){
    if(this.author == "" && this.author == null){
      this.getBooks();
    }
    else{
    this.bookService.getBookByAuthor(this.author)
    .subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (e) => console.error(e)
    });
  }
}
}
