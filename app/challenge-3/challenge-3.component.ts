import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-3',
  templateUrl: './challenge-3.component.html',
  styleUrls: ['./challenge-3.component.css']
})
export class Challenge3Component implements OnInit {
  people: any[] = [

    { firstName: "Peter", lastName: "Horton", age: "30"},
    {firstName: "John", lastName: "Brown", age: "25"},
    {firstName: "Roger", lastName: "Smith", age: "14"},
    {firstName: "Alex", lastName: "Berry", age: "40"},
    {firstName: "Mary", lastName: "Beth", age: "15"},
  ]
  constructor() { }

  ngOnInit() {
  }

}