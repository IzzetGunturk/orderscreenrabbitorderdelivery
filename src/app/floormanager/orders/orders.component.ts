import { Component, Input } from '@angular/core';

interface Order {
  deliverycompanyicon: string;
  id: number;
  type: string;
  comment: string;
  prepared: boolean;
  namecustomer?: string;
  address?: string;
  tablenumber?: number;
  pickuptime: string;
  returntime?: string;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option?: string[];
  quantity: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orders: Order[] = [];
  @Input() showRecoverButton: boolean = false;
  @Input() intransitorders: Order[] = [];
  @Input() inpreparationorders: Order[] = [];
  @Input() readyforpickuporders: Order[] = [];

  getIcon(type: string) {
    if (type === 'Delivery') {
      return 'delivery';
    }
    if (type === 'Pick up') {
      return 'pickup';
    }
    if (type === 'Restaurant') {
      return 'table';
    } else {
      return 'default-icon';
    }
  }

  modalVisible: any = null;

  openModal(order: Order) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }
}
