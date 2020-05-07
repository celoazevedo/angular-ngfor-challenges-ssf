import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {
  books: any[] = [
    { 
      title: 'Eloquent Javascript', 
      author: 'Marijn Haverbeke', 
      pages: 227
    },
    { 
      title: 'JavaScript the Good Parts', 
      author: 'Douglas Crockford', 
      pages: 174
    },
    {
      title: 'JavaScript: The Definitive Guide', 
      author: 'David Flanagan', 
      pages: 1018 
    },
    { 
      title: 'JavaScript and JQuery: Interactive Front-End Web Development', 
      author: 'Jon Duckett', 
      pages: 640 },
  ]
  constructor() { }

  ngOnInit() {
  }

}