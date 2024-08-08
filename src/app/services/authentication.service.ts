import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Email } from '../models/Email';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "Usuarios/register"
  loginUrl = "Usuarios/login"
  resetPasswordUrl = "Usuarios/ForgotPassword"
  weatherUrl = "WeatherForecast"

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  private apiUrl = `${environment.apiUrl}/Usuarios/login`;

  login(credentials: { username: string; password: string }): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(this.apiUrl, credentials);
  }

  // TODO: Implement this endpoint in the backend
  public resetPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.resetPasswordUrl}`, { email });
  }

  public getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherUrl}`);
  }
}
