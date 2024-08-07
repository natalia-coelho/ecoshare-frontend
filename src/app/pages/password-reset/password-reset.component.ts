import { Component } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
})
export class PasswordResetComponent {
  email: string = '';
  message: string | null = null;
  resetFailed: boolean = false;

  constructor(private authService: AuthenticationService) {}

  // TODO: Finish implementing this and integrating with the screen
  resetPassword() {
    this.authService.resetPassword(this.email).subscribe({
      next: () => {
        this.message = 'Se o email estiver registrado, você receberá instruções para redefinir sua senha.';
      },
      error: (err) => {
        console.error('Password reset failed', err);
        this.resetFailed = true;
        this.message = 'Ocorreu um erro. Tente novamente mais tarde.';
      }
    })
  }
}
