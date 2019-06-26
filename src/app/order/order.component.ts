import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private customizedSelections;
  private standardSelections;

  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit() {
    this.getCustomerOrder();
  }

  private getCustomerOrder() {
    this.orderService.getCustomerOrder().subscribe(selections => {
      this.customizedSelections = selections[0];
      this.standardSelections = selections[1];
      console.log('selections', selections)
    }) 
  }

}
