import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  book : Book = new Book();
  selectedTeam!:String;
  constructor(private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveBook(){
    if(this.book.isbn==null ||this.book.name==null || this.book.category==null){
      alert("ISBN, Name and Category are required");
    }
    else {
      this.bookService.createBook(this.book).subscribe( data =>{

        this.router.navigate(['/books']);
    },
    error => console.log(error));
    }

  }
  onSubmit(){
    this.saveBook();
  }
}
