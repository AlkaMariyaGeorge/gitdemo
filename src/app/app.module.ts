import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DemoIdComponent } from './demo-id/demo-id.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from './shared/auth.guard';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PagenotfoundComponent,
    LandingpageComponent,
    DemoIdComponent,
    FormElementsComponent,
    TwowayBindingComponent,
    LoginPageComponent,
    LoaderComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
