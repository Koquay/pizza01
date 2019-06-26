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

  public getCustomerOrder() {    
    let customizedOrderDetails = this.getCustomizedOrderDetails();    
    console.log('customizedOrderDetails', customizedOrderDetails)
    console.log('customizedSelections', this.customizedSelections)
    return forkJoin([of(customizedOrderDetails), of(this.standardSelections)])
  }

  private getCustomizedOrderDetails() {
    let orderDetails = [];
    
    this.customizedSelections.forEach((selection, index) => {
      console.log(`selectionItem[${index}]`, selection)
      var ingredients = '';
      
      selection.forEach((item, index) => {
        console.log('item', item)
        if(item.title) {
          ingredients = ingredients + item.title;

          if(index < selection.length-1) {
            ingredients = ingredients + ', '
          }
        }        
      })

      orderDetails.push(
        {
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
