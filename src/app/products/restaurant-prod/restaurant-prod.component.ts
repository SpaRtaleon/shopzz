import { Component, OnInit } from '@angular/core';

import { Product } from '../product.entity';
import { ProductService } from '../../services/product.service';
import { Item } from '../item.entity';
import { CartComponent } from 'src/app/cart/cart.component';
import { Toast, ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-prod',
  templateUrl: './restaurant-prod.component.html',
  styleUrls: ['./restaurant-prod.component.css']
})
export class RestaurantProdComponent implements OnInit {

  constructor(private productService: ProductService,private toast:ToastrService,private route: ActivatedRoute) { }
  
  products:any;

  ngOnInit() {
   
    console.log(this.route.snapshot.url[1].path);
    let SHopId=this.route.snapshot.url[1].path;
    this.productService.findAll(SHopId)
    .subscribe((data:any)=>{
      console.log(data);
      this.products=data.products;
    })
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
  
    this.toast.success('Cart Added Successfuy!');

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
