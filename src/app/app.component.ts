import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  term1=' ';
  term2=' ';
  term3=' ';
  term4=' ';

  constructor(private ob: BookService){}
  booksData;
  ngOnInit(){
    this.ob.getData().subscribe(data=>{this.booksData=data;})
  }

}
