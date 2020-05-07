import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-1',
  templateUrl: './challenge-1.component.html',
  styleUrls: ['./challenge-1.component.css']
})
export class Challenge1Component implements OnInit {

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