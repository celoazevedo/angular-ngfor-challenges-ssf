import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  numbers: number[] = [ 0,1,2,3,4,5,6,7,8,9,10 ]
  
  constructor() { }

  ngOnInit() {
  }

}