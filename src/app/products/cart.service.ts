import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[]

  // next we create a behaviour subject
  cartlist = new BehaviorSubject([])

  constructor() { }

  addcart(product:any){
    this.cartarray.push(product)          // here the content recieved from all-product component is assigned to cartarray by passing it through products
    this.cartlist.next(this.cartarray)    // here the data in cart array is made available to be exported to the desired component by making it transmissable through behaviour subject object cartlist
    console.log(this.cartlist);           // content viewable in console -> Behavior Subject -> value
    let total=this.gettotal();
    
  }

  //total price
  gettotal(){
    var grandsum=0;
    this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum;
  }

  //delete items from cart
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1)    // ex:splice(3,2)  => this code removes 2 elements from the 3 rd index of array including the 3rd. So it removes 3rd element and the 4th element
      }
    })
    this.cartlist.next(this.cartarray)    // remove item and update it in the list
  }

  //remove all items from cart
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }
}
