import { Component } from '@angular/core';

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
  selector: 'app-floormanager',
  templateUrl: './floormanager.component.html',
  styleUrls: ['./floormanager.component.scss']
})
export class FloormanagerComponent {
  inpreparationorders: Order[] = [
    {
      deliverycompanyicon: '',
      id: 1238,
      type: 'Pick up',
      comment: '',
      prepared: true,
      namecustomer: 'Emma Jones',
      pickuptime: '17:30',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: ['Witte Wijnsaus'], quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1239,
      type: 'Restaurant',
      comment: '',
      prepared: true,
      pickuptime: 'ZSM',
      tablenumber: 3,
      dishes: [
        { name: 'Pasta Bolognese', option: ['Penne'], quantity: 1 },
        { name: 'Pepsi Regular', quantity: 1 }
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1240,
      type: 'Restaurant',
      comment: '',
      prepared: false,
      tablenumber: 6,
      pickuptime: 'ZSM',
      dishes: [
        { name: "Oma's Chili", option: ['Zonder tomaat'], quantity: 1 },
        { name: 'Fanta', quantity: 1 }
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1241,
      type: 'Pick up',
      comment: 'Pizza niet snijden',
      prepared: false,
      pickuptime: '18:30',
      namecustomer: 'Max van der Meer',
      dishes: [
        { name: 'Pizza Tonno', quantity: 1 },
        { name: 'Pasta Bolognese', option: ['Tagliatelle'], quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Sprite', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: 'ubereats',
      id: 1242,
      type: 'Delivery',
      comment: 'Graag rietjes erbij',
      prepared: false,
      pickuptime: '18:45',
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      dishes: [
        { name: 'Zalmfilet', option: ['Witte Wijnsaus'], quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Classic Burger', quantity: 1 },
        { name: 'Crispy Chicken Burger', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1243,
      type: 'Delivery',
      comment: 'Graag rietjes erbij',
      prepared: false,
      pickuptime: '18:45',
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1241,
      type: 'Pick up',
      comment: '',
      prepared: false,
      pickuptime: '18:50',
      namecustomer: 'Isabella Rodriguez',
      dishes: [
        { name: 'Pizza Tonno', quantity: 1 },
        { name: 'Visburger Ravigotte', option: ['Tagliatelle'], quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
  ];

  readyforpickuporders: Order[] = [
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1246,
      type: 'Delivery',
      comment: 'Geen uien',
      prepared: false,
      namecustomer: 'Emma Jones',
      pickuptime: '17:30',
      address: 'Pieter Zeemanstraat 53, 6603 AV Wijchen',
      dishes: [
        { name: 'Pasta Bolognese', option: ['Tagliatelle'], quantity: 1 },
        { name: 'Sprite', quantity: 1 },
      ]
    }
  ];

  intransitorders: Order[] = [
    {
      deliverycompanyicon: '',
      id: 1236,
      type: 'Delivery',
      comment: '',
      prepared: false,
      namecustomer: 'Emma Jones',
      pickuptime: '17:15',
      returntime: '17:30',
      address: 'Oud Ravensteinseweg 7, 6602 AC Wijchen',
      dishes: [
        { name: 'Rijst', option: ['Penne'], quantity: 1 },
        { name: 'Steak', option: ['Medium rare', 'Medium rare','Medium rare','2 Rode Wijnsaus'], quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1235,
      type: 'Delivery',
      comment: '',
      address: 'Cunerahof 13, 6601 AE Wijchen',
      prepared: false,
      namecustomer: 'Emma Jones',
      pickuptime: '17:10',
      returntime: '17:20',
      dishes: [
        { name: "Oma's Chili", option: ['Zonder tomaat'], quantity: 1 },
        { name: 'Fanta', quantity: 1 }
      ]
    },
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1234,
      type: 'Delivery',
      comment: '',
      prepared: false,
      namecustomer: 'Emma Jones',
      address: 'Tunnelweg 18, 6601 CW Wijchen',
      pickuptime: '17:05',
      returntime: '17:16',
      dishes: [
        { name: 'Gelakte Spareribs', option: ['BBQ Sauce'], quantity: 1 },
        { name: 'Chili Sin Carne', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: 'ubereats',
      id: 1233,
      type: 'Delivery',
      comment: '',
      prepared: false,
      namecustomer: 'Emma Jones',
      address: 'Karekietstraat 1, 6601 DS Wijchen',
      pickuptime: '16:50',
      returntime: '17:05',
      dishes: [
        { name: 'Gelakte Spareribs', option: ['BBQ Sauce'], quantity: 1 },
        { name: 'Chili Sin Carne', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
  ];

  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }

  // modal
  modalVisible: any = null;

  openModal(order: any) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }

  // filter
  restaurantOrders() {
    return this.inpreparationorders.filter(order => order.type == 'Restaurant');
  }

  // recover button
  showRecoverButton: boolean = false;

  // icon
  getIcon(type: string) {
    if (type === 'Delivery') {
      return 'delivery';
    }
    if (type === 'Pick up') {
      return 'pickup';
    }
    if (type === 'Restaurant') {
      return 'table';
    }
    else {
      return 'default-icon';
    }
  }
}
