import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
 public isUpperCase:boolean=false;
 public orderBy?:keyof Hero 
 public heroes:Hero[]=[
  {
    name:'superman',
    canFly:true,
    color:Color.blue
  },
  {
    name:'deredevil',
    canFly:false,
    color:Color.red
  },
  {
    name:'Batman',
    canFly:false,
    color:Color.black
  },
  {
    name:'Robin',
    canFly:false,
    color:Color.green
  }
 ]
 toggleUpperCase(){
  this.isUpperCase=!this.isUpperCase
  }
 changeOrder(value:keyof Hero){
  this.orderBy=value
  }
}
