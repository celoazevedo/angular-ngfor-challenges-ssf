import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Challenge1Component } from './challenge-1/challenge-1.component';
import { Challenge2Component } from './challenge-2/challenge-2.component';
import { Challenge3Component } from './challenge-3/challenge-3.component';
import { Challenge4Component } from './challenge-4/challenge-4.component';
import { Challenge5Component } from './challenge-5/challenge-5.component';
import { Challenge6Component } from './challenge-6/challenge-6.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { ExampleComponent } from './example/example.component';

export const router: Routes = [

    { path: '', component: Challenge1Component },
    { path: 'challenge-2', component:Challenge2Component },
    { path: 'challenge-3', component: Challenge3Component  },
    { path: 'challenge-4', component: Challenge4Component  },
    { path: 'challenge-5', component: Challenge5Component  },
    { path: 'challenge-6', component: Challenge6Component  },
    { path: 'ngif-example', component: NgIfExampleComponent },


     { path: 'example', component: ExampleComponent },
   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);