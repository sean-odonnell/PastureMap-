import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PanelsComponent } from '../panels/panels.component';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <div class="custom-grey">
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <div class='custom-border1'>
            <div>
              <h2>
                Design a Paddock
              </h2>
               <p style="font-size: 1.2em;"><i>
                Design and create a paddock. Enter the the custom dimensions from your land and let us compute the area, parimeter and estimate the cost of fencing for you.
              </i></p>
            </div>
            <div>
            <div>
              <a class="btn btn-default" href=''><h4>DESIGN</h4></a>
            </div>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class='custom-border1'>
            <div>
              <h2>
                Stored Designs
              </h2>
              <p style="font-size: 1.2em;"><i>
                Store your designs for future reference. Come back and look anytime or update. Designs can be saved, edited and deleted.</i></p>
              </div>
              <div>
                <a class="btn btn-default" href=''><h4>STORAGE</h4></a>
              </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class='custom-border1'>
            <div>
              <h2>
                About
              </h2>
              <p style="font-size: 1.2em;"><i>
                Learn more about the mapper tool and its awesome author.
              </i></p>
            </div>
            <div>
              <a class="btn btn-default" href=''><h4>ABOUT</h4></a>
            </div>
          </div>

        </div>
      </div>
      </div>
    `,
    styles: [`
      .custom-border1 {
        border: solid;
        margin: 0px 20px 0px 20px;
        padding: 0px 5px 5px 5px;
        text-align: center;
        min-height: 240px;
      },
      .custom-grey {
        background-color: #D8D9D8;
      },
    `]
  })
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
