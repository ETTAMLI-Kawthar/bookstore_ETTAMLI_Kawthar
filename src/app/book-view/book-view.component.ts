import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  id!: number
  book!: Book
  constructor(private route: ActivatedRoute, private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.book = new Book();
    this.bookService.getBookById(this.id).subscribe( data => {
      this.book = data;
    });
  }
  onSubmit(){
    this.router.navigate(['/books']);
  }
}
