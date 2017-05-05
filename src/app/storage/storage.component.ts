import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  template: `
  <div class="page-header">
    <h1>
      {{title}} | <small>{{subtitle}}</small>
    </h1>
  </div>
  `,
  styles: []
})
export class StorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Storage';
  subtitle = 'saved paddock designs';
}
