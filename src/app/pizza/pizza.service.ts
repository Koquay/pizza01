import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaDb;

  constructor() {
    this.createPizzaDb();
   }

  public getPizzaTemplate(id) {
      let pizza = this.pizzaDb.find(pizza => pizza.id == id);
      console.log('pizza', pizza)
      return of(pizza);
  }

  private createPizzaDb() {
    this.pizzaDb = [
      {id: 1, name: 'MEDIUM 1 TOPPING', selection: 'none', price: 6.99, qty: 1, img: 'ME1TP.png'}, 
      {id: 2, name: 'LARGE 1 TOPPING', selection: 'none', price: 8.99, qty: 1, img: 'LE1TP.png'}, 
      {id: 3, name: 'XLARGE  1 TOPPING', selection: 'none', price: 9.99, qty: 1, img: 'XE1TP.png'}, 

      {id: 4, name: 'BUFFALO CHICKEN', selection: 'both', price: 12.99, qty: 1, img: 'buffalo-chicken-pizza.png',
        toppings: ['red-onions', 'buffalo-chicken', 'fine-roasted-peppers']
      },        
      
      {id: 5, name: 'CHIPOTLE CHICKEN', selection: 'both', price: 11.99, qty: 1, img: 'Chipotle-Chicken.png',
        toppings: ['fine-roasted-peppers', 'chipotle-chicken']
      }, 
      {id: 6, name: 'CHICKEN BRUSCHETTA', selection: 'none', price: 14.99, qty: 1, img: 'chickenbruschetta.png',
        toppings: ['chicken', 'fine-roasted-peppers', 'bruschetta', 'roasted-garlic']
      },       
    ]
  }

  public getPizzaDb() { 
    return of(this.pizzaDb);
  }
}
