import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'my-first-project';
  username: string = '';
  password: string = '';
  registered: boolean = false;// Assuming userData is an object with username and email properties

  onSubmit() {
    // Implement your onSubmit logic here
    console.log("Registration form submitted.");
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
    this.registered = true;
  }
}
