import { StarterComponent } from '../starter/starter.component';
import { StarterContentComponent } from '../starter/starter-content/starter-content.component';
import { HousesComponent } from '../houses/houses.component';
import { HouseListComponent } from '../houses/house-list/house-list.component';
import { HouseAddComponent } from '../houses/house-add/house-add.component';
import { HouseDetailComponent } from '../houses/house-detail/house-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: StarterComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
        {
          path: 'dashboard',
          component: StarterContentComponent
        },
        {
          path: 'houses',
          component: HousesComponent,
          children: [
            {
              path: '',
              redirectTo: 'list',
              pathMatch: 'full'
            },
            {
              path: 'list',
              component: HouseListComponent
            },{
              path: 'add',
              component: HouseAddComponent
            },{
              path: 'detail',
              component: HouseDetailComponent
            },
          ]},
      ]},

    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
