import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-6',
  templateUrl: './challenge-6.component.html',
  styleUrls: ['./challenge-6.component.css']
})
export class Challenge6Component implements OnInit {
  numbers: number[] = [ 0,1,2,3,4,5,6,7,8,9,10 ]
  constructor() { }

  ngOnInit() {
  }

}