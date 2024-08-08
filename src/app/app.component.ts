import { Component } from '@angular/core';
import { Login } from './models/login';
import { Register } from './models/register';
import { JwtAuth } from './models/jwtAuth';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';
  loginDto = new Login();
  registerDto = new Register();
  jwtDTO = new JwtAuth();

  constructor(private authService: AuthenticationService) { }

  register(registerDTO: Register) {
    this.authService.register(registerDTO).subscribe();
  }


  // login(loginDto: Login) {
  //   //stores the jwtDTO into a state
  //   this.authService.login(loginDto).subscribe((jwtDTO) => {
  //     localStorage.setItem('jwtToken', jwtDTO.token)
  //   });
  // }

  getWeather() {
    this.authService.getWeather().subscribe((weatherData: any) => {
      console.log(weatherData);
    })
  }
}
