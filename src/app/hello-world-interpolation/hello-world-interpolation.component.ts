import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  styles: [
  ]
})
export class HelloWorldInterpolationComponent implements OnInit {
  message = 'Hello Tec!';

  constructor() { }

  ngOnInit(): void {
  }

}
