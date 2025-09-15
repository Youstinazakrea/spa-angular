import { NgModule } from '@angular/core';

import { RouterModule,Routes } from "@angular/router";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

let route: Routes =[

  {path:"" ,component:AdminLayoutComponent,children:[
    {path:"home",component:AdminHomeComponent},
    {path:"login",component:AdminLoginComponent},



  ]}
];



@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AdminModule {}
