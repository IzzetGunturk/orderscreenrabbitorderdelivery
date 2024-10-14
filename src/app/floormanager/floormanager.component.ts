import { Component, OnInit } from '@angular/core';
import { Order } from './interfaces/order.interfaces';
import { timer } from 'rxjs';

@Component({
  selector: 'app-floormanager',
  templateUrl: './floormanager.component.html',
  styleUrls: ['./floormanager.component.scss']
})

export class FloormanagerComponent implements OnInit {
  inpreparationorders: Order[] = [
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
        { name: 'Pepsi Regular', quantity: 1 },
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
        { name: 'Fanta', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1241,
      type: 'Pick up',
      comment: 'Pizza niet snijden',
      prepared: false,
      orderedtime: '15:10',
      pickuptime: '18:30',
      email: 'maxvandermeer@hotmail.com',
      phonenumber: '+31 6 54324944',
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
      orderedtime: '17:45',
      pickuptime: '18:45',
      email: 'sophiapatel12@hotmail.com',
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Sophia Patel',
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
      comment: '',
      prepared: false,
      orderedtime: '14:45',
      pickuptime: '18:45',
      email: 'johanklaasen@hotmail.com',
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Johan Klaasen',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1244,
      type: 'Pick up',
      comment: '',
      prepared: false,
      orderedtime: '13:00',
      pickuptime: '18:50',
      email: 'isabellarodriguez4@hotmail.com',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Isabella Rodriguez',
      dishes: [
        { name: 'Pizza Tonno', quantity: 1 },
        { name: 'Visburger Ravigotte', option: ['Tagliatelle'], quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1245,
      type: 'Delivery',
      comment: '',
      prepared: false,
      orderedtime: '13:00',
      pickuptime: '19:00',
      email: 'vinny7@hotmail.com',
      address: 'Ringlaan 78, 6602 EB Wijchen',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Vinicius Silva',
      dishes: [
        { name: 'Pizza Tonno', quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1246,
      type: 'Delivery',
      comment: '',
      prepared: false,
      orderedtime: '18:00',
      pickuptime: '19:15',
      email: 'fleurhenken@hotmail.com',
      address: 'Bergweg 13A, 6602 ET Wijchen',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Fleur Henken',
      dishes: [
        { name: 'Cheesy BBQ Burger', quantity: 1 },
        { name: 'Classic Burger', quantity: 1 },
        { name: 'Crispy Fries', quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1247,
      type: 'Pick up',
      comment: 'Extra servetjes',
      prepared: false,
      orderedtime: '13:00',
      pickuptime: '19:20',
      email: 'ivoklaassen@hotmail.com',
      phonenumber: '+31 6 21529854',
      namecustomer: 'Ivo Klaassen',
      dishes: [
        { name: 'Wrap Spicy Chicken', quantity: 1 },
        { name: 'Aardappel Wedges Cajun', quantity: 1 },
        { name: 'Mayonaise', quantity: 1 },
        { name: 'Pepsi', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
  ];

  readyforpickuporders: Order[] = [
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1237,
      type: 'Delivery',
      comment: 'Geen uien',
      prepared: false,
      namecustomer: 'Isabel John',
      orderedtime: '16:00',
      pickuptime: '17:30',
      address: 'Pieter Zeemanstraat 53, 6603 AV Wijchen',
      phonenumber: '+31 6 21529854',
      email: 'isabeljohn@hotmail.com',
      dishes: [
        { name: 'Pasta Bolognese', option: ['Tagliatelle'], quantity: 1 },
        { name: 'Wrap Spicy Chicken', quantity: 1 },
        { name: 'Sprite', quantity: 1 },
      ]
    },
   {
      deliverycompanyicon: '',
      id: 1238,
      type: 'Pick up',
      comment: '',
      prepared: true,
      namecustomer: 'Emma Jones',
      orderedtime: '13:00',
      pickuptime: '17:30',
      email: 'emmajones@hotmail.com',
      phonenumber: '+31 6 21529854',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: ['Witte Wijnsaus'], quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
  ];

  intransitorders: Order[] = [
    {
      deliverycompanyicon: '',
      id: 1236,
      type: 'Delivery',
      comment: 'Graag de steaks apart verpakken',
      prepared: false,
      namecustomer: 'John Doe',
      orderedtime: '14:23',
      pickuptime: '17:15',
      returntime: '17:30',
      address: 'Oud Ravensteinseweg 7, 6602 AC Wijchen',
      email: 'johndoe5@hotmail.com',
      phonenumber: '+31 6 21529854',
      dishes: [
        { name: 'Rijst', quantity: 1 },
        { name: 'Steak', option: ['2 Rode Wijnsaus'], quantity: 1 },
        { name: 'Crispy Fries', quantity: 2 },
        { name: 'Fanta', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1235,
      type: 'Delivery',
      comment: '',
      address: 'Cunerahof 13, 6601 AE Wijchen',
      prepared: false,
      namecustomer: 'Alejandro Gomez',
      email: 'alejandrogomez@hotmail.com',
      phonenumber: '+31 6 21529854',
      orderedtime: '12:00',
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
      namecustomer: 'Thijs de Vries',
      email: 'thijsdv3@live.nl',
      address: 'Tunnelweg 18, 6601 CW Wijchen',
      phonenumber: '+31 6 21529854',
      orderedtime: '13:24',
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
      namecustomer: 'Luca Ferrari',
      email: 'lucaferrari@hotmail.com',
      address: 'Karekietstraat 1, 6601 DS Wijchen',
      phonenumber: '+31 6 21529854',
      orderedtime: '15:00',
      pickuptime: '16:50',
      returntime: '17:05',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 3 },
        { name: 'Sprite', quantity: 3 },
      ]
    },
  ];

  // recover button
  showRecoverButton: boolean = false;
  
  // filter
  filterType: any = null;
  isFilterRestaurantActive: boolean = false;
  isFilterPickupActive: boolean = false;
  isFilterDeliveryActive: boolean = false;

  toggleFilter(type: string) {
    if (this.filterType === type) {
      this.filterType = null;
      if (type == 'Restaurant') {
        this.isFilterRestaurantActive = false;
      }
      else if (type == 'Pick up') {
        this.isFilterPickupActive = false;
      }
      else if (type == 'Delivery') {
        this.isFilterDeliveryActive = false;
      }
    } else {
      this.filterType = type;
      if (type == 'Restaurant') {
        this.isFilterRestaurantActive = true;
        this.isFilterPickupActive = false;
        this.isFilterDeliveryActive = false;
      }
      else if (type == 'Pick up') {
        this.isFilterRestaurantActive = false;
        this.isFilterPickupActive = true;
        this.isFilterDeliveryActive = false;
      }
      else if (type == 'Delivery') {
        this.isFilterRestaurantActive = false;
        this.isFilterPickupActive = false;
        this.isFilterDeliveryActive = true;
      }
    }
  }

  getFilteredOrders(orders: Order[]) {
    if (!this.filterType && !this.searchValue) {
      return orders;
    } 
    else {
      return orders.filter(order => 
      (!this.filterType || order.type == this.filterType) &&
      (!this.searchValue || order.id.toString().includes(this.searchValue) ||
      order.namecustomer?.toLowerCase().includes(this.searchValue.toLowerCase()) || 
      order.address?.toLowerCase().includes(this.searchValue)));
    }
  } 

  // search
  searchValue: string = '';

  handleInputSearch(searchValue: string) {
    this.searchValue = searchValue;
    const searchResults = this.showSearchOrders([
      ...this.inpreparationorders,
      ...this.readyforpickuporders,
      ...this.intransitorders
    ]);

    console.log(searchResults);
  }

  showSearchOrders(orders: Order[]) {
    if (!this.searchValue) {
      return orders;
    } else {
      return orders.filter(order => 
      order.id.toString().includes(this.searchValue) ||
      order.namecustomer?.toLowerCase().includes(this.searchValue.toLowerCase()) || 
      order.address?.toLowerCase().includes(this.searchValue));
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

  // amount orders
  amountOrders(type: string) {
    const inTransitDeliveryCount = this.intransitorders.filter(order => order.type === type).length;
    const inPreparationDeliveryCount = this.inpreparationorders.filter(order => order.type === type).length;
    const readyForPickupDeliveryCount = this.readyforpickuporders.filter(order => order.type === type).length;
    
    return inTransitDeliveryCount + inPreparationDeliveryCount + readyForPickupDeliveryCount;
  }

  get amountDeliveryOrders() {
    return this.amountOrders('Delivery');
  }

  get amountPickupOrders() {
    return this.amountOrders('Pick up')
  }

  get amountRestaurantOrders() {
    return this.amountOrders('Restaurant')
  }

  get amountTotalOrders() {
    return this.amountOrders('Delivery') + this.amountOrders('Pick up') + this.amountOrders('Restaurant');
  }

}
