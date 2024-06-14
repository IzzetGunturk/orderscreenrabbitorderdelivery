import { Component, AfterViewInit } from '@angular/core';

interface DeliveryOrder {
  deliverycompanyicon: string;
  id: number;
  type: string;
  comment?: string;
  prepared: boolean;
  address: string;
  deliverytime: string;
  deliveryduration: string;
}

interface PickupOrder {
  id: number;
  type: string;
  comment?: string;
  prepared: boolean;
  namecustomer: string;
  dishes: Dish[];
}

interface RestaurantOrder {
  tablenumber: number;
  type: string;
  comment?: string;
  prepared: boolean;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option?: string[];
  quantity: number;
}

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})

export class PickupComponent implements AfterViewInit {
  deliveryorders: DeliveryOrder[] =[
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1237,
      type: 'Delivery',
      comment: 'Kloppen aan de deur aub',
      prepared: true,
      address: 'Pieter Zeemanstraat 53, 6603 AV Wijchen',
      deliverytime: 'Delivery time: 17:52',
      deliveryduration: 'Delivery duration: 00:07',
    },
    {
      deliverycompanyicon: 'ubereats',
      id: 1242,
      type: 'Delivery',
      prepared: false,
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:05',
    },
    {
      deliverycompanyicon: '',
      id: 1243,
      type: 'Delivery',
      prepared: false,
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:15',
    },
  ]

  pickuporders: PickupOrder[] = [
    {
      id: 1238,
      type: 'Pick up',
      prepared: false,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: ['Witte Wijnsaus'], quantity: 1},
        { name: '5Kitchens Salade', quantity: 1},
      ]
    },
    {
      id: 1241,
      type: 'Pick up',
      comment: 'Pizza niet snijden',
      prepared: false,
      namecustomer: 'Max van der Meer',
      dishes: [
        { name: 'Pizza Tonno', quantity: 1},
        { name: 'Pasta Bolognese', option: ['Tagliatelle'], quantity: 1},
        { name: '5Kitchens Salade', quantity: 1},
        { name: 'Sprite', quantity: 1},
        { name: 'Spa blauw', quantity: 1},
      ]
    },
  ];

  restaurantorders: RestaurantOrder[] = [
    {
      tablenumber: 3,
      type: 'Restaurant',
      prepared: true,
      dishes: [
        { name: 'Pasta Bolognese', option: ['Penne'], quantity: 1},
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Pepsi Regular', quantity: 1},
        { name: 'Fanta', quantity: 1},
        { name: 'Sprite', quantity: 2},
      ]
    },
    {
      tablenumber: 6,
      type: 'Restaurant',
      prepared: false,
      dishes: [
        { name: "Oma's Chili", option: ['Zonder tomaat',], quantity: 1},
        { name: 'Fanta', quantity: 1},
      ]
    },
  ];
  
  // date time
  currentDateTime: Date;

  constructor() {
    this.currentDateTime = new Date();
  }

  ngAfterViewInit() {
    const buttonViewMore = document.querySelectorAll('.buttonViewMore') as NodeListOf<HTMLElement>;
    const orders = document.querySelectorAll('.commentandorderinformation') as NodeListOf<HTMLElement>;
    const ellipsis = document.querySelectorAll('.ellipsis') as NodeListOf<HTMLElement>;
  
    orders.forEach((order, index) => {
      const button = buttonViewMore[index];
      const ellipsisOverlay = ellipsis[index];

      if (order.offsetHeight > 70) {
        button.style.display = 'flex';
        ellipsisOverlay.style.display = 'block';
      }
      else {
        button.style.display = 'none';
        ellipsisOverlay.style.display = 'none';
      }
    });
    
  }
}