import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'my-first-project';
  username: string = '';
  email: string = '';
  password: string = '';
  registered: boolean = false;// Assuming userData is an object with username and email properties

  onSubmit() {
    // Implement your onSubmit logic here
    console.log("Registration form submitted.");
    console.log("Username: ", this.username);
    console.log("Email: ", this.email);
    console.log("Password: ", this.password);
    this.registered = true;
  }
  
}
