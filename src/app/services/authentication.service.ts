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

  // login(user: Login): Observable<JwtAuth> {
  //   return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`, user).pipe(
  //     catchError((error) => {
  //       console.error('Erro no serviço de login:', error);
  //       return throwError(() => new Error('Erro ao autenticar.'));
  //     })
  //   );
  // }

  login(credentials: { username: string; password: string }): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(this.apiUrl, credentials);
  }

  // login(username: string, password: string): Observable<string> {
  //   return this.http.post<string>(this.apiUrl, { username, password }, { responseType: 'text' as 'json' });
  // }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  // TODO: Implement this endpoint in the backend
  public resetPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.resetPasswordUrl}`, { email });
  }

  public getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherUrl}`);
  }
}
