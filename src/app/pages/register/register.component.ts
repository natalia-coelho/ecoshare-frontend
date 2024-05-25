import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';
import { Register } from 'src/app/models/register';

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

  constructor(private authService: AuthenticationService) { }


  register(registerDTO: Register) {
    this.authService.register(registerDTO).subscribe();
  }

  ngOnInit() {
  }

}
