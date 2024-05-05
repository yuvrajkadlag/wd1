import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  username: string = '';
  email: string = '';
  password: string = '';
  userData: any; 
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
