import {Component} from 'angular2/core';
import {MainApp} from './mainApp/mainApp.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  directives: [MainApp]
})

export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Ian Gold';
  }
}
