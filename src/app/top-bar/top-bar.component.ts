import { Component } from "@angular/core";

@Component({
    selector:"top-bar",
    templateUrl:'./top-bar.component.html',
    styleUrls:['./top-bar.component.css']
})
export class topBarTool {
    headers=[
        {
          'firstname':'Mobile'
        },
      {
          'firstname':'Fashion'
        }];

}