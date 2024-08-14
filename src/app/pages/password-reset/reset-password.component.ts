import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  token: string = ''
  message: string | null = null;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.email = params.get('email')
      this.token = params.get('token');
      // Do something with the query parameter
    });
  }


  // TODO: Finish implementing this and integrating with the screen
  resetPassword() {
    // this.authService.forgotPassword(this.email).subscribe({
    //   next: () => {
    //     this.message = 'Se o email estiver registrado, você receberá instruções para redefinir sua senha.';
    //   },
    //   error: (err) => {
    //     console.error('Password reset failed', err);
    //     this.resetFailed = true;
    //     this.message = 'Ocorreu um erro. Tente novamente mais tarde.';
    //   }
    // })
  }
}
