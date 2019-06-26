import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  private pizzaDb;

  constructor(
    private pizzaService:PizzaService
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

}
