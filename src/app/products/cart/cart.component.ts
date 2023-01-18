import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartitems:any=[]
  grand:any
  updateTotal:any
  constructor(private cart:CartService, private router:Router){}

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        this.cartitems=data       // assigning the content getting from service to cartitems
        
      }
    )
    this.grand=this.cart.gettotal()
  }
  
  removeItem(product:any){
    this.cart.removecart(product)
    this.grand=this.cart.gettotal()
  }

  removeall(){
    this.cart.removeall()
  }

  discount5per(source:any){
    party.confetti(source)
    let discount=(this.grand*5)/100
    this.updateTotal=this.grand-discount
  }

  discount10per(){
    let discount=(this.grand*10)/100
    this.updateTotal=this.grand-discount
  }

  discount30per(){
    let discount=(this.grand*30)/100
    this.updateTotal=this.grand-discount
  }

  discount50per(){
    let discount=(this.grand*50)/100
    this.updateTotal=this.grand-discount
  }

  proceed(){
    alert('Your order is placed')
    this.removeall()
    this.router.navigateByUrl('')
  }

}
