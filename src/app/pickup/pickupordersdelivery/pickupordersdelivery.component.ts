import { Component, Input } from '@angular/core';
import { DeliveryOrder } from '../interfaces/pickup.interfaces';

@Component({
  selector: 'app-pickupordersdelivery',
  templateUrl: './pickupordersdelivery.component.html',
  styleUrl: './pickupordersdelivery.component.scss'
})
export class PickupordersdeliveryComponent {
  @Input() deliveryorders: DeliveryOrder[] = [];

  // filter orders
  deliveryOrders(prepared: boolean) {
    return this.deliveryorders.filter(order => order.type === 'Delivery' && order.prepared == prepared)
  }

  deliveryOrdersReady() {
    return this.deliveryOrders(true);
  }

  deliveryOrdersPreparation() {
    return this.deliveryOrders(false);
  }
  
  // mark order done
  handleOrderDelivery(index: number) {
    if (index < this.deliveryorders.length) {
      const order = document.getElementsByClassName('order-delivery')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.deliveryorders.splice(index, 1);
      }, 2000);
    }
  }
}
