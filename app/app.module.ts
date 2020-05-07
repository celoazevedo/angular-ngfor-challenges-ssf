import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { Challenge1Component } from './challenge-1/challenge-1.component';
import { Challenge2Component } from './challenge-2/challenge-2.component';
import { Challenge3Component } from './challenge-3/challenge-3.component';
import { ExampleComponent } from './example/example.component';
import { Challenge4Component } from './challenge-4/challenge-4.component';
import { Challenge5Component } from './challenge-5/challenge-5.component';
import { Challenge6Component } from './challenge-6/challenge-6.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routes],
  
  
  declarations: [ AppComponent, HeaderComponent, Challenge1Component, Challenge2Component, Challenge3Component, ExampleComponent, Challenge4Component, Challenge5Component, Challenge6Component, NgIfExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
