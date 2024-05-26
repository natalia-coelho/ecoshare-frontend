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

  constructor(private authService: AuthenticationService, private router: Router) { }

  // register(registerDTO: Register) {
  //   this.authService.register(registerDTO).subscribe();
  // }

  register() {
    this.authService.register(this.registerDto).subscribe({
      next: (jwtDTO) => {
        localStorage.setItem('jwtToken', jwtDTO.token);
        this.router.navigate(['/products']); // Redirect to the dashboard or any other page
      },
      error: (err) => {
        console.error('Register failed', err);
        // Handle the error (e.g., show an error message to the user)
      }
    });
  }

  ngOnInit() {
  }

}
