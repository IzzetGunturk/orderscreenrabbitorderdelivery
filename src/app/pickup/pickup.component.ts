import { Component, AfterViewInit, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DeliveryOrder, PickupOrder, RestaurantOrder } from './interfaces/pickup.interfaces';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})

export class PickupComponent implements AfterViewInit, OnInit {
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
      routeaddress: 'https://www.google.nl/maps/dir/5Kitchens,+Markt,+Wijchen/Pieter+Zeemanstraat+53,+6603+AV+Wijchen/@51.8084557,5.7246526,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47c707a9268f0997:0x1884e14e47145bfc!2m2!1d5.7256237!2d51.8070124!1m5!1m1!1s0x47c70697ca849c39:0xf2fbb64bdf34b382!2m2!1d5.7442809!2d51.8098708!3e1?hl=nl&entry=ttu',
    },
    {
      deliverycompanyicon: 'ubereats',
      id: 1242,
      type: 'Delivery',
      prepared: false,
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:05',
      routeaddress: 'https://www.google.nl/maps/dir/5Kitchens,+Markt,+Wijchen/Aalsburg+3102,+6602+WS+Wijchen/@51.8068945,5.7198425,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47c707a9268f0997:0x1884e14e47145bfc!2m2!1d5.7256237!2d51.8070124!1m5!1m1!1s0x47c706ad6545dbcf:0x602484a7a4dee70f!2m2!1d5.7183789!2d51.8080319!3e1?hl=nl&entry=ttu',

    },
    {
      deliverycompanyicon: '',
      id: 1243,
      type: 'Delivery',
      prepared: false,
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:05',
      routeaddress: 'https://www.google.nl/maps/dir/5Kitchens,+Markt,+Wijchen/Diepvoorde+1051,+6605+EA+Wijchen/@51.804999,5.7217513,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47c707a9268f0997:0x1884e14e47145bfc!2m2!1d5.7256237!2d51.8070124!1m5!1m1!1s0x47c706a94d853bc7:0xa7f456256d164683!2m2!1d5.722236!2d51.8029314!3e1?hl=nl&entry=ttu',
    },
  ]

  pickuporders: PickupOrder[] = [
    {
      id: 1238,
      type: 'Pick up',
      prepared: true,
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

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.currentDateTime = new Date();
    })
  }

  constructor() {
    this.currentDateTime = new Date()
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