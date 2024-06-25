// kitchenstaff.component.ts
import { Component, OnInit } from '@angular/core';
import { Order, Dish } from './interfaces/kitchenstaff.interfaces';
import { timer } from 'rxjs';

@Component({
  selector: 'app-kitchenstaff',
  templateUrl: './kitchenstaff.component.html',
  styleUrls: ['./kitchenstaff.component.scss']
})

export class KitchenstaffComponent implements OnInit {
  orders: Order[] = [
    {
      icon: 'pickup',
      id: 1238,
      type: 'Pick up',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', option: '', quantity: 1, prepared: false },
        { name: 'Fanta', option: '', quantity: 1, prepared: false }
      ]
    },
    {
      icon: 'table',
      id: 1239,
      type: '3',
      dishes: [
        { name: 'Pasta Bolognese', option: 'Penne', quantity: 1, prepared: false },
        { name: 'Pepsi Regular', option: '', quantity: 1, prepared: false },
      ]
    },
    {
      icon: 'table',
      id: 1240,
      type: '6',
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
  markOrderAsPrepared(index: number) {
    if (index < this.orders.length) {
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

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.currentDateTime = new Date();
    })
  }

  constructor() {
    this.currentDateTime = new Date()
  }
}
