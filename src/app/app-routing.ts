import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SignUpComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { SignInComponent } from './sign-in/sign-in.component.spec';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'success', component: SuccessModalComponent },
  { path: '**', redirectTo: '/sign-in' } // Redirect to Sign-in for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
