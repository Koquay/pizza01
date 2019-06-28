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
      {id: 1, name: 'MEDIUM 1 TOPPING', selection: 'none', price: 6.00, quantity: 1, img: 'ME1TP.png'}, 
      {id: 2, name: 'LARGE 1 TOPPING', selection: 'none', price: 8.00, quantity: 1, img: 'LE1TP.png'}, 
      {id: 3, name: 'XLARGE  1 TOPPING', selection: 'none', price: 9.00, quantity: 1, img: 'XE1TP.png'}, 

      {id: 4, name: 'BUFFALO CHICKEN', selection: 'both', price: 12.00, quantity: 1, img: 'buffalo-chicken-pizza.png',
        toppings: ['buffalo-chicken', 'red-onions', 'fine-roasted-peppers']
      },        
      
      {id: 5, name: 'CHIPOTLE CHICKEN', selection: 'both', price: 11.00, quantity: 1, img: 'Chipotle-Chicken.png',
        toppings: ['chipotle-chicken', 'fine-roasted-peppers', ]
      }, 
      {id: 6, name: 'CHICKEN BRUSCHETTA', selection: 'none', price: 14.00, quantity: 1, img: 'chickenbruschetta.png',
        toppings: ['chicken', 'fine-roasted-peppers', 'bruschetta', 'roasted-garlic']
      },   
      {id: 7, name: 'CHIPOTLE STEAK', selection: 'none', price: 15.00, quantity: 1, img: 'Chipotle-Steak.png',
        toppings: ['chipotle-steak', 'red-onions']
      },    
      {id: 8, name: 'BACON DOUBLE CHEESEBURGER', selection: 'none', price: 10.00, quantity: 1, img: 'bacondblchburg.png',
        toppings: ['bacon-crumbs', 'ground-beef']
      },
      {id: 9, name: 'BIG BACON BONANZA', selection: 'none', price: 10.00, quantity: 1, img: 'bigbacon.png',
        toppings: ['bacon-crumbs', 'bacon-strips']
      },
    ]
  }

  public getPizzaDb() { 
    return of(this.pizzaDb);
  }
}
