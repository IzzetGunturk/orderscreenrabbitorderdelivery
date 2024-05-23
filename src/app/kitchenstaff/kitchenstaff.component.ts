// kitchenstaff.component.ts
import { Component } from '@angular/core';

interface Order {
  icon: string;
  id: number;
  type: string;
  comment: string;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option: string;
  quantity: number;
  prepared: boolean;
}

@Component({
  selector: 'app-kitchenstaff',
  templateUrl: './kitchenstaff.component.html',
  styleUrls: ['./kitchenstaff.component.scss']
})
export class KitchenstaffComponent {
  orders: Order[] = [
    {
      icon: 'pickup',
      id: 1238,
      type: 'Pick up',
      comment: '',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', option: '', quantity: 1, prepared: false },
        { name: 'Fanta', quantity: 1, option: '', prepared: false }
      ]
    },
    {
      icon: 'table',
      id: 1239,
      type: '3',
      comment: '',
      dishes: [
        { name: 'Pasta Bolognese', option: 'Penne', quantity: 1, prepared: false },
        { name: 'Pepsi Regular', option: '', quantity: 1, prepared: false },
      ]
    },
    {
      icon: 'table',
      id: 1240,
      type: '6',
      comment: '',
      dishes: [
        { name: "Oma's Chili", option: 'Zonder tomaat', quantity: 1, prepared: false },
        { name: "Fanta", option: '', quantity: 1, prepared: false },
      ]
    },
    {
      icon: 'pickup',
      id: 1241,
      type: 'Pick up',
      comment: 'Pizza niet snijden',
      dishes: [
        { name: 'Pizza Tonno', option: '', quantity: 1, prepared: false },
        { name: 'Pasta Bolognese', option: 'Tagliatelle', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', option: '', quantity: 1, prepared: false },
        { name: 'Sprite', option: '', quantity: 1, prepared: false },
        { name: 'Fanta', option: '', quantity: 1, prepared: false },
      ]
    },
    {
      icon: 'delivery',
      id: 1242,
      type: 'Delivery',
      comment: 'Graag rietjes erbij',
      dishes: [
        { name: 'Zalmfilet', option: 'Witte Wijnsaus', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', option: '', quantity: 1, prepared: false },
        { name: 'Classic Burger', option: '', quantity: 1, prepared: false },
        { name: 'Crispy Chicken Burger', option: '', quantity: 1, prepared: false },
        { name: 'Pasta Bolognese', option: 'Tagliatelle', quantity: 1, prepared: false },
        { name: 'Fanta', option: '', quantity: 1, prepared: false },
        { name: 'Pepsi Regular', option: '', quantity: 1, prepared: false },

      ]
    },
  ];

  // toggle checkbox
  togglePreparedStatus(dishes: Dish) {
    dishes.prepared = !dishes.prepared;
  }

  // mark order as done + timeout effect
  markOrderAsPrepared() {
    if (this.orders.length > 0) {
      const order = document.querySelector('.order')

      if (order) {
        order.classList.add('fade-out')
      }
    }
    setTimeout(() => {
      this.orders.splice(0, 1);
    }, 2000);
  }

  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }
}
