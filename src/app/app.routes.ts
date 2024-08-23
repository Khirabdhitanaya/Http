import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SuccessModalComponent } from "./success-modal/success-modal.component";
import { SignInComponent } from "./sign-in/sign-in.component.spec";


export const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'success', component: SuccessModalComponent }
  ];
  