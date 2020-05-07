import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-2',
  templateUrl: './challenge-2.component.html',
  styleUrls: ['./challenge-2.component.css']
})
export class Challenge2Component implements OnInit {
    names: string[] = [
    "Zoey",
    "John",
    "Roger",
    "Robert",
    "Alex"
  ]  
  constructor() { }

  ngOnInit() {
  }

}