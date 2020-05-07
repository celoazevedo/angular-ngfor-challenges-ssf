import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-4',
  templateUrl: './challenge-4.component.html',
  styleUrls: ['./challenge-4.component.css']
})
export class Challenge4Component implements OnInit {
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