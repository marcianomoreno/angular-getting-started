import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-hello-world-di',
  templateUrl: './hello-world-di.component.html',
  styles: [
  ]
})
export class HelloWorldDiComponent implements OnInit {
  count = 0;
  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }

}
