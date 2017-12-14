import { StarterComponent } from '../pages/starter/starter.component';
import { StarterContentComponent } from '../pages/starter/starter-content/starter-content.component';
import { HousesComponent } from '../pages/houses/houses.component';
import { HouseListComponent } from '../pages/houses/house-list/house-list.component';
import { HouseAddComponent } from '../pages/houses/house-add/house-add.component';
import { HouseDetailComponent } from '../pages/houses/house-detail/house-detail.component';
import { HouseEditComponent } from '../pages/houses/house-edit/house-edit.component'
import { LoginComponent } from '../pages/login/login.component'
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
              path: 'detail/:id',
              component: HouseDetailComponent
            },
            {
              path: 'edit/:id',
              component: HouseEditComponent
            }
          ]},
      ]},
      {
        path: 'login',
        component: LoginComponent
      },

    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
