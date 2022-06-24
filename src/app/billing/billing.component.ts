import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { order } from '../models/order';
import { Item } from '../products/item.entity';
import { ProductService } from '../services/product.service';

import { emailValidation,len,numeric}from './custom.validate';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  order = new order();

  constructor( private service:ProductService
   ) { }
  
  ngOnInit(){
    this.service.name.subscribe(
      item=>{
        console.log(item)
       this.order.items=item
      }
    )
    
     console.log(this.order.items)
  }
  onSubmit(form: any) {
    console.log(this.order);
    this.service.placeOrder(this.order).
    subscribe((data:any)=>{
      console.log(data)
    })
    
  }
}

