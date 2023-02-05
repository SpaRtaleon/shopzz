import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../products/item.entity';
import { Product } from '../products/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  get token(){
return localStorage.getItem('userToken');
  }
  
  private cartitems = new BehaviorSubject<Item[]>([]);
  name = this.cartitems.asObservable()
  constructor(private http:HttpClient) {

}
getItems(items:any) {
  console.log(items)
  this.cartitems.next(items);
}
findAll(shopId:any){
  var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' +this.token });
return this.http.get(`${environment.api}/api/shop/`+shopId,{ headers: headerOptions })
}

// find(id: string): Product {
//   return this.products[this.getSelectedIndex(id)];
// }

// private getSelectedIndex(id: string) {
//   for (var i = 0; i < this.products.length; i++) {
//       if (this.products[i].id == id) {
//           return i;
//       }
//   }
//   return -1;
// }
placeOrder(data:any){
  console.log(data)
  let dat=JSON.stringify(Item)
  return this.http.post<JSON>(`${environment.api}/api/products/placeOrder`,{data})

}
}
