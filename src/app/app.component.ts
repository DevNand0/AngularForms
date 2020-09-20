import { Component } from '@angular/core';
import { User } from 'tdf/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  userModel = new User("Fernanda Inayao","fernanditaaaa1992@gmail.com",5334521,"","morning",true);
}
