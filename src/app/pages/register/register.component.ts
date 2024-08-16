import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';
import { Register } from 'src/app/models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  title = 'argon-dashboard-angular';
  loginDto = new Login();
  registerDto = new Register();
  jwtDTO = new JwtAuth();
  loginFailed: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }
  register() {
    this.authService.register(this.registerDto).subscribe({
      next: (jwtDTO) => {
        localStorage.setItem('jwtToken', jwtDTO.token);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Register failed', err);
        this.loginFailed = true;
        this.errorMessage = 'Não foi possível continuar com o cadastro. \n\n Entre em contato com o administrador.';
      }
    });
  }

  ngOnInit() {

  }
}
