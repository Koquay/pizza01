import { Component, OnInit } from '@angular/core';
import { CustomizeTemplate } from '../customizer/customize-template';

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

  constructor() {
    this.customizeTemplate = new CustomizeTemplate();
    this.customerSelections.push({ name: 'base', selection: 'none', price: 7.00, img: 'base.png' })
    this.price = this.customerSelections[0].price;
  }

  ngOnInit() {
  }

  private addIngredient() {
    for (let template of this.customizeTemplate.toppingsTemplate) {
      if (template.choice == 'none') {
        this.removeSelection(template.name);   
        template.double = false;             
      } else {
        this.removeSelection(template.name); 

        console.log('template', template)
        let selection = template.selections.find(option => option.selection == template.choice);
        console.log('selection', selection);

        selection.title = template.title;
        selection.double = template.double;
        
        this.customerSelections.push(selection)
        console.log('customerSelections', this.customerSelections)
      }      
    }

    this.computePrice();
  }

  private doubleIngredient(template) {
    console.log('template', template)
    if(template.double) {
      this.removeSelection(template.name);
      if(template.choice == 'none') {
        template.choice = 'full';
      }            
    }

    this.addIngredient();
  }

  private removeSelection(name) {
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
      if(selection.selection != 'full') {
        location = `${location}-Side`
      }
      return `${selection.title},  ${amount}, ${location}`
  }

  private computePrice() {
    let price = 0;
    console.log('customerSelections', this.customerSelections)
    for (let selection of this.customerSelections) {
      let selectionPrice = selection.price;
      if(selection.double) {
        selectionPrice *= 2;
      }
      price += selectionPrice;
    }

    this.price = price * this.quantity;
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
}
