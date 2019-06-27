import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private customizedSelections = [];
  private totals = { subtotal: 0, deliveryCharge: 0, GstHst: 0, discount: 0, total: 0 };


  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getCustomerOrder();
  }

  private getCustomerOrder() {
    this.orderService.getCustomerOrder().subscribe(orders => {
      this.customizedSelections = [...this.customizedSelections, ...orders];
      this.computeTotals();
    })
  }

  private increaseQuantity(selection) {
    selection.quantity += 1;
    this.computeTotals();
    console.log('increase selection', selection.quantity)
  }

  private decreaseQuantity(selection) {
    console.log('increase selection', selection)
    if (selection.quantity > 0) {
      selection.quantity -= 1;
      this.computeTotals();
    }

    if (selection.quantity == 0) {
      this.removeSelection(selection);
    }
  }

  private computeTotals() {
    this.totals.subtotal = 0;

    for (let selection of this.customizedSelections) {
      this.totals.subtotal += selection.price * selection.quantity
    }
  }

  private removeSelection(selection) {
    let removeIndex = this.customizedSelections.findIndex(storedSelection => storedSelection.id == selection.id);

    if (removeIndex >= 0) {
      this.customizedSelections.splice(removeIndex, 1);
    }
  }

}
