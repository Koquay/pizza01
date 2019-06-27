import { Injectable } from '@angular/core';
import { of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private customizedSelections = [];
  private standardSelections = [];

  constructor() { }

  public addToCustomized(customizedSelection) {
    this.customizedSelections.push(customizedSelection)
    console.log('customizedSelections', this.customizedSelections);
  }

  public addRegularOrder(selection) {    
    selection.detail = selection.name;
    selection.ingredients = selection.name;
    selection.itemTotal = selection.price * selection.quantity;
    this.standardSelections.push(selection)
    console.log('pizza to add', selection);
    console.log('standardSelections', this.standardSelections);
    return of();
  }

  public getCustomerOrder() {    
    let customizedOrderDetails = this.getCustomizedOrderDetails();    
    console.log('customizedOrderDetails', customizedOrderDetails)
    console.log('customizedSelections', this.customizedSelections)
    let allOrders = [...customizedOrderDetails, ...this.standardSelections];
    console.log('allOrders', allOrders)
    return of(allOrders);
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
          price:selection[0].price,
          itemTotal:selection[0].itemTotal, 
          quantity:selection[0].quantity
      });

      console.log('orderDetails', orderDetails)      
    });
    return orderDetails;
  }
}
