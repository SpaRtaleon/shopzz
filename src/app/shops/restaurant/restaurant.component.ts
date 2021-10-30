import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  restaurants=[{
    'RestaurantName':'Jainika Restaurant',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  },
  {
    'RestaurantName':'Alagar Restaurant',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  },{
    'RestaurantName':'Hotel Malli',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  }
  ,
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi'
  }
]
}
