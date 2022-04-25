import { Component, OnInit } from '@angular/core';
import { DrumsService } from '../drums.service';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.css']
})
export class DrumsComponent implements OnInit {
  drums = this.drumService.getDrums();

  constructor(
    private drumService: DrumsService
  ) { }

  ngOnInit(): void {
  }

}
