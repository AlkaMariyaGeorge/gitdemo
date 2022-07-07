import { FormElementsComponent } from './form-elements/form-elements.component';
import { DemoIdComponent } from './demo-id/demo-id.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demo/:demoId', component: DemoIdComponent },
  { path: 'form-elements', component: FormElementsComponent},
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
