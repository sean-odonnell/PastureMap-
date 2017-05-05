import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="page-header">
    <h1>
      {{title}} | <small>{{subtitle}}</small>
    </h1>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'About';
  subtitle = 'instructions on how to use the paddock mapper';
}
