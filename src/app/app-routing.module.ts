import { UsersComponent } from './users/users.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { DemoIdComponent } from './demo-id/demo-id.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';



const routes: Routes = [

  { path: 'landingpage', component: LandingpageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
  { path: 'demo/:demoId', component: DemoIdComponent, canActivate: [AuthGuard] },
  { path: 'form-elements', component: FormElementsComponent, canActivate: [AuthGuard] },
  { path: 'twoway-binding', component: TwowayBindingComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
