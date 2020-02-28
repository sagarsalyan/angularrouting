import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { COmponent2Component } from './component2/component2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentdetailsComponent } from './componentdetails/componentdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'/component1',pathMatch:'full'},//Default Component
  // {path:'',component:Component1Component},//Default Component
  {path:'component1',component:Component1Component},
  {path:'deptdetails/:id',component:ComponentdetailsComponent},
  {path:'component2',component:COmponent2Component},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[Component1Component,COmponent2Component,PageNotFoundComponent,ComponentdetailsComponent]
