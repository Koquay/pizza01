import { Injectable } from '@angular/core';
import { of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private customizedSelections = [];
  private standardSelections = [];
  private allOrders = [];

  constructor() { }

  public addToCustomized(customizedSelection) {
    this.customizedSelections.push(customizedSelection)
    console.log('customizedSelections', this.customizedSelections);
  }

  public addRegularOrder(selection) {    
    selection.id = Math.random();
    selection.detail = selection.name;
    selection.ingredients = selection.name;
    selection.itemTotal = selection.price * selection.quantity;
    selection.price = selection.price * selection.quantity;
    this.standardSelections.push(selection)
    console.log('pizza to add', selection);
    console.log('standardSelections', this.standardSelections);
    return of();
  }

  public getCustomerOrder() {    
    let customizedOrderDetails = this.getCustomizedOrderDetails();    
    console.log('customizedOrderDetails', customizedOrderDetails)
    console.log('customizedSelections', this.customizedSelections);
    this.allOrders = [...customizedOrderDetails, ...this.standardSelections];
    console.log('allOrders', this.allOrders)
    // this.customizedSelections = [];
    // this.standardSelections = []; 
    console.log('allOrders after nullification', this.allOrders)   
    return of(this.allOrders);
  }

  private getCustomizedOrderDetails() {
    let orderDetails = [];
    
    this.customizedSelections.forEach((selection, index) => {
      console.log(`selectionItem[${index}]`, selection)
      var ingredients = '';
      
      selection.forEach((item, index) => {
        if(item.title) {
          ingredients = ingredients + item.title;

          if(index < selection.length-1) {
            ingredients = ingredients + ', '
          }
        }        
      })

      orderDetails.push(
        {
          id: Math.random(),
          name: selection[0].name,
          ingredients:ingredients || selection[0].name, 
          img:selection[0].mainImg, 
          price:selection[0].price = selection[0].itemTotal,
          itemTotal:selection[0].itemTotal, 
          quantity:selection[0].quantity
      });

      console.log('orderDetails', orderDetails)      
    });
    return orderDetails;
  }

  public removeSelection(id) {
    let removeIndex = this.allOrders.findIndex(storedSelection => storedSelection.id == id);

    console.log('before selection removed allOrders', this.allOrders)
    console.log('selection to removed from allOrders', id)

    if (removeIndex >= 0) {
      this.allOrders.splice(removeIndex, 1);
      console.log('after selection removed from allOrders', this.allOrders)
    }

    removeIndex = this.standardSelections.findIndex(storedSelection => storedSelection.id == id);

    console.log('before selection removed standardSelections', this.standardSelections)
    console.log('selection to removed from standardSelections', id)

    if (removeIndex >= 0) {
      this.standardSelections.splice(removeIndex, 1);
      console.log('after selection removed from standardSelections', this.standardSelections)
    }

    removeIndex = this.customizedSelections.findIndex(storedSelection => storedSelection.id == id);

    console.log('before selection removed customizedSelections', this.customizedSelections)
    console.log('selection to removed from customizedSelections', id)

    if (removeIndex >= 0) {
      this.customizedSelections.splice(removeIndex, 1);
      console.log('after selection removed from customizedSelections', this.customizedSelections)
    }

    return of();
  }

  public decreaseQuantity(id) {
    let selection = this.standardSelections.find(storedSelection => storedSelection.id == id);
    console.log('checking for selection in standardSelections', selection)
    console.log('standardSelections', this.standardSelections)
    if(selection) {
      selection.quantity -= 1;
      console.log('selection decreased in standardSelections', selection)
    }

    if(selection) {
      selection.quantity -= 1;
    }

    selection = this.customizedSelections.find(storedSelection => storedSelection.id == id);
    console.log('checking for selection in customizedSelections', selection)
    console.log('customizedSelections', this.customizedSelections)
    if(selection) {
      console.log('selection decreased in customizedSelections', selection)
      selection.quantity -= 1;
    }
    return of();
  }

  public increaseQuantity(id) {
    let selection = this.allOrders.find(storedSelection => storedSelection.id == id);
    if(selection) {
      selection.quantity += 1;
    }

    selection = this.standardSelections.find(storedSelection => storedSelection.id == id);
    if(selection) {
      selection.quantity += 1;      
    }

    selection = this.customizedSelections.find(storedSelection => storedSelection.id == id);
    if(selection) {
      selection.quantity += 1;
    }
    return of();
  }
  
}
