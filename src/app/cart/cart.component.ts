import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../products/item.entity';
import { ProductService } from '../services/product.service';
import { Product } from '../products/product.entity';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   items: Item[] = [];
	total: number = 0;
  @Output() productAdded = new EventEmitter();
  constructor( private activatedRoute: ActivatedRoute,
		private productService: ProductService,private route:Router) { }
    get id() {
      return localStorage.getItem('cart');
  }
  ngOnInit() {
    this.loadCart();
  }

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart')!);
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart')!);
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}
	checkout(){
		console.log(this.items)
		this.productService.getItems(this.items);
		this.route.navigate(['/billing'])
	}
  }


