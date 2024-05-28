import { Component } from '@angular/core';

interface DeliveryOrder {
  deliverycompanyicon: string;
  id: number;
  type: string;
  comment: string;
  prepared: boolean;
  address: string;
  deliverytime: string;
  deliveryduration: string;
}

interface PickupOrder {
  id: number;
  type: string;
  comment: string;
  prepared: boolean;
  namecustomer: string;
  dishes: Dish[];
}

interface RestaurantOrder {
  tablenumber: number;
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
      comment: '',
      prepared: false,
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:05',
    },
    {
      deliverycompanyicon: '',
      id: 1243,
      type: 'Delivery',
      comment: '',
      prepared: false,
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      deliverytime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:15',
    },
  ]

  pickuporders: PickupOrder[] = [
    {
      id: 1242,
      type: 'Pick up',
      comment: '',
      prepared: true,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: 'Witte Wijnsaus', quantity: 1},
        { name: '5Kitchens Salade', option: '', quantity: 1},
      ]
    },
    {
      id: 1242,
      type: 'Pick up',
      comment: 'Pizza niet snijden',
      prepared: false,
      namecustomer: 'Max van der Meer',
      dishes: [
        { name: 'Pizza Tonno', option: '', quantity: 1},
        { name: 'Pasta Bolognese', option: 'Tagliatelle', quantity: 1},
        { name: '5Kitchens Salade', option: '', quantity: 1},
        { name: 'Sprite', option: '', quantity: 1},
        { name: 'Spa blauw', option: '', quantity: 1},
      ]
    },
  ];

  restaurantorders: RestaurantOrder[] = [
    {
      tablenumber: 3,
      type: 'Restaurant',
      comment: '',
      prepared: false,
      dishes: [
        { name: 'Pasta Bolognese', option: 'Penne', quantity: 1},
        { name: 'Pepsi Regular', option: '', quantity: 1},
      ]
    },
    {
      tablenumber: 6,
      type: 'Restaurant',
      comment: '',
      prepared: false,
      dishes: [
        { name: "Oma's Chili", option: 'Zonder tomaat', quantity: 1},
        { name: 'Fanta', option: '', quantity: 1},  
        { name: 'Fanta', option: '', quantity: 1},        
        { name: 'Fanta', option: '', quantity: 1},        

      ]
    }
  ];

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

  pickupOrders(prepared: boolean) {
    return this.pickuporders.filter(order => order.type == 'Pick up' && order.prepared == prepared)
  }

  pickupOrdersReady() {
    return this.pickupOrders(true);
  }

  pickupOrdersPreparation() {
    return this.pickupOrders(false);
  }

  restaurantOrders(prepared: boolean) {
    return this.restaurantorders.filter(order => order.type == 'Restaurant' && order.prepared == prepared)
  }

  restaurantOrdersReady() {
    return this.restaurantOrders(true);
  }

  restaurantOrdersPreparation() {
    return this.restaurantOrders(false);
  }
  
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

  // mark order done
  handleOrderDelivery(index: number) {
    if (index < this.deliveryorders.length) {
      const order = document.querySelectorAll('.order-delivery')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.deliveryorders.splice(index, 1);
      }, 2000);
    }
  }

  handleOrderPickup(index: number) {
    if (index < this.pickuporders.length) {
      const order = document.querySelectorAll('.order-pickup')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.pickuporders.splice(index, 1);
      }, 2000);
    }
  }

  handleOrderRestaurant(index: number) {
    if (index < this.restaurantorders.length) {
      const order = document.querySelectorAll('.order.restaurant')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.restaurantorders.splice(index, 1);
      }, 2000);
    }
  }
}