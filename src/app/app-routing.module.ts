import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { StorageComponent } from './storage/storage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'storage',
    component: StorageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

    @Component({
      selector: '<selector>',
      templateUrl: '<template.html>',
    })
    export class <Name>Component implements OnInit {
      constructor() {}
      ngOnInit() {}
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
