import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
  styles: [
  ]
})
export class HelloWorldBindingsComponent implements OnInit {
  fontColor = 'blue';
  sayHello = 1;
  canClick = false;
  message = 'Hello Tec!'
  
  constructor() {

   }

  ngOnInit(): void {
  }
  sayMessage() {
    alert('Hello world!')
  }

}
