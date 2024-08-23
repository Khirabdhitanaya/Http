import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { updateSignUpData, updateSignUpStep2Data } from '../store/form.action';
import { selectSignUpData, selectSignUpStep2Data } from '../store/form.selector';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent implements OnInit {
  emailOrPhone: string = '';
  name: string = '';
  password: string = '';
  step: number = 1;
  
  organization: string = '';
  organizationError: string = '';
  designation: string = '';
  birthdate: string = '';
  city: string = '';
  pincode: string = '';

  constructor(private store: Store, private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailOrPhone = params['emailOrPhone'] || '';
    });

    this.store.select(selectSignUpData).subscribe(data => {
      this.name = data.name;
      this.password = data.password;
    });

    this.store.select(selectSignUpStep2Data).subscribe(data => {
      this.organization = data.organization;
      this.designation = data.designation;
      this.birthdate = data.birthdate;
      this.city = data.city;
      this.pincode = data.pincode;
    });
  }

  onContinue() {
    this.store.dispatch(updateSignUpData({ name: this.name, password: this.password }));
    this.step = 2;
  }

  onBack() {
    this.step = 1;
  }

  onSubmit() {
    this.store.dispatch(updateSignUpStep2Data({
      organization: this.organization,
      designation: this.designation,
      birthdate: this.birthdate,
      city: this.city,
      pincode: this.pincode
    }));

    this.authService.getOrganizations().subscribe(orgs => {
      if (!orgs.includes(this.organization)) {
        this.organizationError = 'Unknown organization-id';
      } else {
        this.router.navigate(['/success']);
      }
    });
  }
}
