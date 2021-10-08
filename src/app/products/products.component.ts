import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName:string='';
  type:string='';
  addpro(formValue:NgForm){
    console.log(
    formValue.value
    )
  }
  constructor() { }

  ngOnInit(): void {
  }

}
