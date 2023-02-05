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
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    'RestaurantName':'Alagar Restaurant',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://media.timeout.com/images/105846896/image.jpg'
  },{
    'RestaurantName':'Hotel Malli',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://media-cdn.tripadvisor.com/media/photo-s/02/1c/fa/27/filename-abc5871-jpg.jpg'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg'
  }
  ,
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg'
  },
  {
    'RestaurantName':'Hotel SilverSpoon',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://media-cdn.tripadvisor.com/media/photo-s/1b/69/72/6e/caption.jpg'
  },{
    'RestaurantName':'Jainika Restaurant',
    'Address':' Thilagar Nagar, Sekkalai, Karaikudi',
    'img':'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80'
  }
]
}
