import {  NgModule } from '@angular/core';


import { RouterModule,Routes } from "@angular/router";
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ConectComponent } from './components/conect/conect.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';
import { TrainingComponent } from './components/training/training.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';



const route:Routes =[
  {path:"", component:UserLayoutComponent,children:[
        {path:'hero',component:HeroComponent},
  {path:'about',component:AboutComponent},
  {path:'conect',component:ConectComponent},
  {path:'events',component:EventsComponent},
  {path:'training',component:TrainingComponent},
  {path:'courses',component:CoursesComponent},
  {path:'',redirectTo:'hero',pathMatch:'full'},

  ],
},

];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UserModule {}
