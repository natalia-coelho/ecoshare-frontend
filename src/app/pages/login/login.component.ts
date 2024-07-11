import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app.routing';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';
import { Register } from 'src/app/models/register';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title = 'argon-dashboard-angular';
  loginDto = new Login();
  registerDto = new Register();
  jwtDTO = new JwtAuth();
  loginFailed: boolean = false;
  errorMessage: string = '';

  // constructor(private authService: AuthenticationService) { }
  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    this.authService.login(this.loginDto).subscribe({
      next: (jwtDTO) => {
        localStorage.setItem('jwtToken', jwtDTO.token);
        this.router.navigate(['/products']);
        this.loginFailed = false;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginFailed = true;
        this.errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
      }
    });
  }
}
