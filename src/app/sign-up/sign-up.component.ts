// 

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',  // Update to point to the HTML file
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailOrPhone = params['emailOrPhone'] || '';
    });
  }

  onContinue() {
    this.step = 2;
  }

  onBack() {
    this.step = 1;
  }

  onSubmit() {
    this.authService.getOrganizations().subscribe(orgs => {
      if (!orgs.includes(this.organization)) {
        this.organizationError = 'Unknown organization-id';
      } else {
        // All validations passed, proceed with submission
        console.log('Form Submitted:', {
          emailOrPhone: this.emailOrPhone,
          name: this.name,
          password: this.password,
          organization: this.organization,
          designation: this.designation,
          birthdate: this.birthdate,
          city: this.city,
          pincode: this.pincode
        });

        // Redirect to success modal
        this.router.navigate(['/success']);
      }
    });
  }
}
