import { Component, OnInit } from '@angular/core';
import { RouterEvent, ROUTES } from '@angular/router';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'App Name';

  showFiller = false;
headers=[
    {
      'firstname':'Mobile'
    },
  {
      'firstname':'Fashion'
    }];

    image1="../assets/img/shop.jpg"
    image2="../assets/img/wepik-2021822-17421.png"
    image3="../assets/img/pexels-terje-sollie-298863.jpg"
    images=[this.image1,this.image2,this.image3];
  constructor() { }

  ngOnInit(): void {
  }

}
