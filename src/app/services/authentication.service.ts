import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "Usuarios/register"
  loginUrl = "Usuarios/login"
  forgotPasswordUrl = "Usuarios/ForgotPassword"
  resetPasswordUrl = "Usuarios/ResetPassword"

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  private apiUrl = `${environment.apiUrl}/Usuarios/login`;

  login(credentials: { username: string; password: string }): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(this.apiUrl, credentials);
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
}
