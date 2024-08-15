import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  newPassword: string = '';
  token: string = '';
  message: string | null = null;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.email = params.get('email')
      this.token = params.get('token');
    });
  }

  resetPassword() {
    this.authService.resetPassword(this.email, this.newPassword, this.token).subscribe({
      next: () => {
        this.message = 'Se o email estiver registrado, você receberá instruções para redefinir sua senha.';
      },
      error: (err) => {
        console.error('Password reset failed', err);
        this.message = 'Ocorreu um erro. Tente novamente mais tarde.';
      }
    })
  }
}
