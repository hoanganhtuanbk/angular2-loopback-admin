import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { CommonModule } from '@angular/common';
import { AuthGuard, AuthService } from './services';


import { AppComponent } from './app.component';
import { StarterComponent } from './pages/starter/starter.component';
import { StarterHeaderComponent } from './pages/starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './pages/starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './pages/starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './pages/starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './pages/starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { HouseListComponent } from './pages/houses/house-list/house-list.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseAddComponent } from './pages/houses/house-add/house-add.component';
import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';
import { HouseEditComponent } from './pages/houses/house-edit/house-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    HouseListComponent,
    HousesComponent,
    HouseAddComponent,
    HouseDetailComponent,
    HouseEditComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
