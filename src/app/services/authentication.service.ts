import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "Usuarios/register"
  loginUrl = "Usuarios/login"
  forgotPasswordUrl = "Usuarios/ForgotPassword"
  resetPasswordUrl = "Usuarios/ResetPassword"
  jwtHelper = new JwtHelperService();

  private apiUrl = `${environment.apiUrl}/Usuarios/login`;

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  login(credentials: { username: string; password: string }): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(this.apiUrl, credentials)
  }

  public forgotPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.forgotPasswordUrl}`, { email });
  }

  public resetPassword(email: string, newPassword: string, token: string): Observable<any> {
    const payload = {
      Email: email,
      Token: token,
      NewPassword: newPassword
    };

    return this.http.post(`${environment.apiUrl}/${this.resetPasswordUrl}`, payload);
  }

  getRole(): string | null {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    return null;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  getUserName(): string {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['username'];
    }
    return null;
  }
}
