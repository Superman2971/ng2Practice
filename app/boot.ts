/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app',
  template: '<h1>Hello World, this is my app!</h1>'
})

class AppComponent {

}

bootstrap(AppComponent);
