import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { catchError, map, Observable, of } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Email } from '../models/Email';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "AuthManagement/Register"
  loginUrl = "AuthManagement/Login"
  resetPasswordUrl = "AuthManagement/ResetPassword"
  weatherUrl = "WeatherForecast"

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`, user);
  }

  // TODO: Implement this endpoint in the backend
  public resetPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.resetPasswordUrl}`, { email });
  }

  public getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherUrl}`);
  }
}
