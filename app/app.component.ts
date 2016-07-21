import {Component} from 'angular2/core';
import {MainApp} from './mainApp/mainApp.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  directives: [MainApp],
  styleUrls: ['css/app.css']
})

export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Ian Gold';
    this.info = "This info was passed from parent";
  }
}
