import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  private pizzaDb;

  constructor(
    private pizzaService:PizzaService,
    private orderService:OrderService
  ) { }

  ngOnInit() {
    this.getPizzaDb();
  }

  private getPizzaDb() {
    this.pizzaService.getPizzaDb().subscribe(pizzaDb => {
      this.pizzaDb = pizzaDb;
      console.log('pizzaDb', this.pizzaDb)
    })
  }

  private addToOrder(pizza) {
    this.orderService.addRegularOrder(pizza).subscribe()
  }

  private increaseQuantity(pizza) {    
    pizza.quantity += 1;
    console.log('increase pizza', pizza.quantity)
    this.computePrice(pizza);
  }

  private decreaseQuantity(pizza) {
    if(pizza.quantity > 1) {
      pizza.quantity -= 1;
      this.computePrice(pizza);
    }   
  }

  private computePrice(selection) {
    selection.itemTotal = selection.quantity * selection.price;
  }

}
