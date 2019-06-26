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
    return forkJoin([of(customizedOrderDetails), of(this.standardSelections)])
  }

  private getCustomizedOrderDetails() {
    let orderDetails = [];
    
    this.customizedSelections.forEach((selection, index) => {
      console.log(`selectionItem[${index}]`, selection)
      var description = '';
      
      selection.forEach((item, index) => {
        if(item.title) {
          description = description + item.title;

          if(index < selection.length-1) {
            description = description + ', '
          }
        }        
      })

      orderDetails.push({description:description, img:selection[0].mainImg, price:selection[0].price,
        itemTotal:selection[0].itemTotal, quantity:selection[0].quantity});

      console.log('orderDetails', orderDetails)      
    });
    return orderDetails;
  }
}
