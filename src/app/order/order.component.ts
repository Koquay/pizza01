import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private orders = [];
  private totals = { subtotal: 0, deliveryCharge: 0, GstHst: 0, discount: 0, total: 0 };


  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getCustomerOrder();
  }

  private getCustomerOrder() {
    this.orderService.getCustomerOrder().subscribe(orders => {
      console.log('adding new order to orders', orders)
      console.log('orders before adding order', this.orders)
      // this.orders = [...this.orders, ...orders];
      this.orders = orders;
      console.log('orders after add', this.orders)
      this.computeTotals();
    })
  }

  private increaseQuantity(selection) {
    selection.quantity += 1;
    selection.itemTotal = selection.price * selection.quantity;
    this.computeTotals();
    // this.orderService.increaseQuantity(selection.id).subscribe()
    console.log('increase selection', selection.quantity)
  }

  private decreaseQuantity(selection) {    
    if (selection.quantity > 0) {
      selection.quantity -= 1;      
      selection.itemTotal = selection.price * selection.quantity;
      console.log('decrease selection new ', selection)
      console.log('orders after decrease selection new ', this.orders)
      // this.orderService.decreaseQuantity(selection.id).subscribe()
    }

    console.log('selection to remove quantity ', selection)

    if (selection.quantity == 0) {
      this.removeSelection(selection);
    }

    this.computeTotals();
  }

  private computeTotals() {
    this.totals.subtotal = 0;

    for (let selection of this.orders) {
      this.totals.subtotal += selection.price * selection.quantity;
    }
    console.log('totals', this.totals)
  }

  private removeSelection(selection) {
    let removeIndex = this.orders.findIndex(storedSelection => storedSelection.id == selection.id);

    if (removeIndex >= 0) {
      console.log('before selection removed', this.orders)
      this.orders.splice(removeIndex, 1);
      console.log('after selection removed', this.orders)
    }

    this.orderService.removeSelection(selection.id).subscribe();
    this.computeTotals();    
  }

}
