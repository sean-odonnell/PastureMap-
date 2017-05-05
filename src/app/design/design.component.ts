import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  template: `
  <div class="page-header">
    <h1>
      {{title}} | <small>{{subtitle}}</small>
    </h1>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">
        Paddock Build Inputs
      </h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-4">
          <h3>
            Property Summary
          </h3>
          <div class="well">
            <h3>
              Well!
            </h3>
            <hr>
            <p>
              This is something.
            </p>
            <div>
              Some interesting content
              <div>
                Some interesting content
                <div>
                  Some interesting content
                </div>
              </div>
            </div>
            <div>
              Some interesting content
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h3>
            Span 4
          </h3>
            <form>
              <input type="text" class="form-control">
            </form>
          <form>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                </div>
                <div class="form-group">
                  <label>
                    Length
                  </label>
                  <input type="text" class="form-control">
                  <div class="form-group">
                  </div>
                </div>
                <label>
                  Width
                </label>
                <input type="text" class="form-control">
              </div>
              <div class="col-md-4">
                <div class="form-group">
                </div>
                <form>
                  <div class="form-group">
                    <label>
                      Terrain Color
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>
                      Paddock Color
                    </label>
                    <input type="text" class="form-control">
                  </div>
                </form>
              </div>
              <div class="col-md-4">
                <h3>
                  Image
                </h3>
                <img src="https://s3.amazonaws.com/jetstrap-site/images/website/index/what_icon.png">
              </div>
            </div>
          </form>
        </div>
      </div>
      <a href="#" class="btn btn-default">Click!</a>
      <div class="form-group">
      </div>
    </div>
  </div>
  <div class="btn-group pull-left">
  </div>

  `,
  styles: []
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Design a Paddock';
  subtitle = 'design a paddock on your land using custom waypoints'
}
