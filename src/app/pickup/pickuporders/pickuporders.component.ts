import { Component, Input } from '@angular/core';
import { PickupOrder } from '../interfaces/pickup.interfaces';

@Component({
  selector: 'app-pickuporders',
  templateUrl: './pickuporders.component.html',
  styleUrl: './pickuporders.component.scss'
})
export class PickupordersComponent {
  @Input() pickuporders: PickupOrder[] = [];

  // filter orders
  pickupOrders(prepared: boolean) {
    return this.pickuporders.filter(order => order.type == 'Pick up' && order.prepared == prepared)
  }

  pickupOrdersReady() {
    return this.pickupOrders(true);
  }

  pickupOrdersPreparation() {
    return this.pickupOrders(false);
  }

  // mark order done
  handleOrderPickup(index: number) {
    if (index < this.pickuporders.length) {
      const order = document.getElementsByClassName('order-pickup')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.pickuporders.splice(index, 1);
      }, 2000);
    }
  }

  // modal
  modalVisible: any = null;

  openModal(order: any) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }
}
