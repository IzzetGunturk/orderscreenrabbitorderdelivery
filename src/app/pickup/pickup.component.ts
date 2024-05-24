import { Component } from '@angular/core';

interface Order {
  icon: string;
  id: number;
  type: string;
  comment: string;
  prepared: boolean;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option: string;
  quantity: number;
}

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})
export class PickupComponent {
  orders: Order[] = [
    {
      icon: 'pickup',
      id: 1238,
      type: 'Pick up',
      comment: '',
      prepared: true,
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 },
        { name: 'Fanta', option: '', quantity: 1 }
      ]
    },

    {
      icon: 'pickup',
      id: 1238,
      type: 'Pick up',
      comment: '',
      prepared: false,
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 },
        { name: 'Fanta', option: '', quantity: 1 }
      ]
    },
    {
      icon: 'pickup',
      id: 1238,
      type: 'Delivery',
      comment: '',
      prepared: false,
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 },
        { name: 'Fanta', option: '', quantity: 1 }
      ]
    },
    {
      icon: 'pickup',
      id: 1238,
      type: 'Delivery',
      comment: '',
      prepared: true,
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 },
        { name: 'Fanta', option: '', quantity: 1 }
      ]
    },
  ];

  get deliveryOrdersReady() {
    return this.orders.filter(order => order.type === 'Delivery' && order.dishes.every(dish => order.prepared));
  }

  get deliveryOrdersPreparation() {
    return this.orders.filter(order => order.type === 'Delivery' && order.dishes.some(dish => !order.prepared));
  }

  get pickUpOrdersReady() {
    return this.orders.filter(order => order.type === 'Pick up' && order.dishes.every(dish => order.prepared));
  }

  get pickUpOrdersPreparation() {
    return this.orders.filter(order => order.type === 'Pick up' && order.dishes.some(dish => !order.prepared));
  }

  // mark order as done + timeout effect
  markOrderAsPrepared(index: number) {
    if (index < this.orders.length && index > -1) {
      const order = document.querySelectorAll('.order')[index];

      if (order) {
        order.classList.add('fade-out');
      }

      setTimeout(() => {
        this.orders.splice(index, 1);
      }, 2000);
    }
  }

  // date time
  currentDateTime: Date;

  constructor() {
    this.currentDateTime = new Date();
  }
}
