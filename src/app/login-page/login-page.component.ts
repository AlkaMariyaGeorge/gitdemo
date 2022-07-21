import { LoadingService } from './../services/loading.service';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted: boolean = false;
  errorMessage = null;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onSubmit(value: any) {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      this.loadingService.show();
      this.authService.login(data).subscribe((response: any) => {
        this.loadingService.hide();
        if (response != null) {
          this.authService.setToken(response.data);
          this.router.navigate(['/landingpage']);
        }
      },
        (err: any) => {
          this.loadingService.hide();
          console.log(err);
          this.errorMessage = err.error.error.message;
        }

      );

    }
  }
}
