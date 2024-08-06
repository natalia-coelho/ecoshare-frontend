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
  public resetPassword(email: Email): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/${this.resetPasswordUrl}`, { email })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  public getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherUrl}`);
  }
}
