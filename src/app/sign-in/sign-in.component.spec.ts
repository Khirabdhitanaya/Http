import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSignInData } from '../store/form.action';
import { selectSignInData } from '../store/form.selector';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.scss']
// })
export class SignInComponent {
  emailOrPhone: string = '';
  password: string = '';
  userExists: boolean = false;
  errorMessage: string = '';

  constructor(private store: Store, private authService: AuthService, private router: Router) {
    this.store.select(selectSignInData).subscribe(data => {
      this.emailOrPhone = data.emailOrPhone;
      this.password = data.password || '';
    });
  }

  onSubmit() {
    this.store.dispatch(updateSignInData({ emailOrPhone: this.emailOrPhone, password: this.password }));

    if (!this.userExists) {
      this.authService.validateUser(this.emailOrPhone).subscribe(exists => {
        this.userExists = exists;
        if (!exists) {
          this.router.navigate(['/sign-up'], { queryParams: { emailOrPhone: this.emailOrPhone } });
        }
      });
    } else {
      this.authService.validatePassword(this.emailOrPhone, this.password).subscribe(isValid => {
        if (isValid) {
          this.router.navigate(['/success']);
        } else {
          this.errorMessage = 'Password is not valid';
        }
      });
    }
  }
}
