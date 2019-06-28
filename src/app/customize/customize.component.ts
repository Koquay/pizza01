import { Component, OnInit } from '@angular/core';
import { CustomizeTemplate } from '../customizer/customize-template';
import { OrderService } from '../order/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../pizza/pizza.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  private customizeTemplate: CustomizeTemplate;
  private customerSelections = [];
  private quantity = 1;
  private price = 0;
  private pizza;

  constructor(
    private orderService:OrderService,
    private pizzaService:PizzaService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
    this.customizeTemplate = new CustomizeTemplate();
    this.initCustomerSelections();
    this.price = this.customerSelections[0].price;
  }

  ngOnInit() {
    this.getPizzaBase();
  }

  private getPizzaBase() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.pizzaService.getPizzaTemplate(id).subscribe(pizza => {
      this.pizza = pizza;
      if(this.pizza == null) {
        this.pizza = {id:0, name: 'base', selection: 'none', price: 7.00, img: 'base.png' };
      }      
      this.initCustomerSelections(this.pizza);            
    })
  }

  private initCustomerSelections(pizza?) {
    this.customerSelections= [];
    this.customerSelections.push({id:0, name: 'base', selection: 'none', price: 7.00, img: 'base.png' })
    if(pizza) {
      this.customerSelections[0].name = pizza.name;
      this.customerSelections[0].price = pizza.price;      
      this.customerSelections[0].id = pizza.id;  
      this.customerSelections[0].mainImg = pizza.img;     

      if(pizza.toppings) {
        for(let name of pizza.toppings) {
          let topping = this.customizeTemplate.getTopping(name, 'both');
          topping.price = 0;         
          this.customerSelections.push(topping)
        }
      }
    }
    this.quantity = 1;    
    this.computePrice();
  }

  private addIngredient(template) {
      this.removeSelection(template.name);   
      if (template.choice == 'none') {        
        template.double = false;             
      } else {
        let selection = template.selections.find(option => option.selection == template.choice);
        selection.title = template.title;
        selection.double = template.double;
        // selection.id = Math.random();
        
        this.customerSelections.push(selection)
      }      

    this.computePrice();
  }

  private doubleIngredient(template) {
    if(template.double) {
      this.removeSelection(template.name);
      if(template.choice == 'none') {
        template.choice = 'both';
      }            
    }

    this.addIngredient(template);
  }

  private removeSelection(name) {
    console.log('removing ', name)
    let removeIndex = this.customerSelections.findIndex(selection => selection.name == name);

    if (removeIndex >= 0) {
      this.customerSelections.splice(removeIndex, 1);
    }
  }

  private displaySelection(selection) {
    if(selection.name !== 'base')
      var amount = '';

      if(selection.double) {
        amount = 'Double'
      } else {
        amount = 'Single'        
      }

      let location = selection.selection.charAt(0).toUpperCase() + selection.selection.slice(1)

      location = `${location} side`;

      if(selection.selection == 'both') {
        location = `${location}s`
      }

      selection.detail = `${selection.title},  ${amount}, ${location}`;

      return `${selection.title},  ${amount}, ${location}`
  }

  private computePrice() {
    let price = 0;
    for (let selection of this.customerSelections) {
      let selectionPrice = selection.price;
      if(selection.double) {
        selectionPrice *= 2;
      }
      price += selectionPrice;
    }

    this.price = price * this.quantity;
    this.customerSelections[0].itemTotal = this.price;
  }

  private increaseQuantity() {
    this.quantity += 1;
    this.computePrice();
  }

  private decreaseQuantity() {
    if(this.quantity > 1) {
      this.quantity -= 1;
      this.computePrice();
    }    
  }

  private cancelTemplate() {    
    this.initCustomerSelections(this.pizza);    
    this.customizeTemplate = new CustomizeTemplate();

  }

  private addToCustomized() {
    this.customerSelections[0].quantity = this.quantity;
    let customizedSelections = JSON.parse(JSON.stringify(this.customerSelections));
    // let customizedSelections = Object.assign([], this.customerSelections);            
    console.log('customizedSelections to orderService', customizedSelections)
    this.orderService.addToCustomized(customizedSelections)  
    this.cancelTemplate();
  }
}
