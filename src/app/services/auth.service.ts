// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'user1@example.com', phone: '1234567890', password: 'password1', organizationId: 'org1' },
    { email: 'user2@example.com', phone: '0987654321', password: 'password2', organizationId: 'org2' }
  ];

  private allowedOrganizations = ['org1', 'org2'];

  validateUser(emailOrPhone: string): Observable<boolean> {
    const userExists = this.users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);
    return of(userExists);
  }

  validatePassword(emailOrPhone: string, password: string): Observable<boolean> {
    const user = this.users.find(user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password);
    return of(!!user);
  }

  getOrganizations(): Observable<string[]> {
    return of(this.allowedOrganizations);
  }
}
