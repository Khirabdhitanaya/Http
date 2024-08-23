// 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorMessageComponent } from './error-message/error-message.component';  // Import ErrorMessageComponent

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignUpComponent,
    ErrorMessageComponent  // Declare ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Ensure FormsModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
