import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
})
export class PasswordResetComponent {
  email: string = '';
  message: string | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/password-reset', { email: this.email }).subscribe(
      (response: any) => {
        this.message = 'Se o email estiver registrado, você receberá instruções para redefinir sua senha.';
      },
      (error) => {
        this.message = 'Ocorreu um erro. Tente novamente mais tarde.';
      }
    );
  }
}
