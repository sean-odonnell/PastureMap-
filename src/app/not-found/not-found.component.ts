import { Component, OnInit } from '@angular/core';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-not-found',
  template: `
  <div class="page-header">
    <h1>
      {{title}} | <small>{{subtitle}}</small>
    </h1>
  </div>
  <div custom-alignment>
    <img src="./assets/404.jpg" alt="404 Page Error"/>
  </div>
  `,
  styles: [`
    .custom-alignment {
      vertical-align: middle;
      text-align: center;
      margin: auto;
    }
  `,]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "404 ERROR";
  subtitle = "We are sorry but this page can't be found";
}
