import { Component, OnInit } from '@angular/core';

import { Product } from '../product.entity';
import { ProductService } from '../../services/product.service';
import { Item } from '../item.entity';
import { CartComponent } from 'src/app/cart/cart.component';

@Component({
  selector: 'app-restaurant-prod',
  templateUrl: './restaurant-prod.component.html',
  styleUrls: ['./restaurant-prod.component.css']
})
export class RestaurantProdComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  products!: Product[];

  ngOnInit() {
    this.products = this.productService.findAll();
  }
  page = 1;
  pageSize=20;
  addToCart(data:any){
    var item: Item = {
      product: data,
      quantity: 1
    };
    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart')!);
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: Item = JSON.parse(cart[i]);
        if (item.product.id == data.id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: Item = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }

  } 
  
  // productList=[
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'acccc',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'fvfdvd',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'sds ',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'sdfsf',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'ffggf',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'ioijmf',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'dgfdf',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  //   {
  //     name:'asdas',
  //     price:'40',
  //     note:'asdsds',
  //     active:''
  //   },
  // ]
}
