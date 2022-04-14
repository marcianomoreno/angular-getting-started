import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <h2>Hello TC2005B/CEM/401</h2>
    <p>This is my first component!</p>
  `,
  styles: [
  ]
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
