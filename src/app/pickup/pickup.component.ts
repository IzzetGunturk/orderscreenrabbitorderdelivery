import { Component } from '@angular/core';

interface DeliveryOrder {
  deliverycompanyicon: string;
  id: number;
  type: string;
  deliverycomment: string;
  prepared: boolean;
  address: string;
  deliveryime: string;
  deliveryduration: string;
}

interface PickupOrder {
  id: number;
  type: string;
  deliverycomment: string;
  prepared: boolean;
  namecustomer: string;
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
      deliverycomment: 'Kloppen aan de deur aub',
      prepared: true,
      address: 'Pieter Zeemanstraat 53, 6603 AV Wijchen',
      deliveryime: 'Delivery time: 17:52',
      deliveryduration: 'Delivery duration: 00:07',
    },
    {
      deliverycompanyicon: 'ubereats',
      id: 1242,
      type: 'Delivery',
      deliverycomment: '',
      prepared: false,
      address: 'Aalsburg 3102, 6602 WS Wijchen',
      deliveryime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:05',
    },
    {
      deliverycompanyicon: '',
      id: 1243,
      type: 'Delivery',
      deliverycomment: '',
      prepared: false,
      address: 'Diepvoorde 1051, 6605 EA Wijchen',
      deliveryime: 'Delivery time: 18:45',
      deliveryduration: 'Delivery duration: 00:15',
    },
  ]

  pickuporders: PickupOrder[] = [
    {
      id: 1242,
      type: 'Pick up',
      deliverycomment: '',
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
      deliverycomment: 'Pizza niet snijden',
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

  // filter orders
  get deliveryOrdersReady() {
    const deliveryOrders = this.deliveryorders.filter(order => order.type === 'Delivery');

    const readyDeliveryOrders = deliveryOrders.filter(order => {
      return order.prepared
    });

    return readyDeliveryOrders;
  }

  get deliveryOrdersPreparation() {
    const deliveryOrders = this.deliveryorders.filter(order => order.type === 'Delivery');

    const preparationDeliveryOrders = deliveryOrders.filter(order => {
      return !order.prepared
    });

    return preparationDeliveryOrders;
  }

  get pickupOrdersReady () {
    const pickupOrders = this.pickuporders.filter(order => order.type === "Pick up");

    const readyPickupOrders = pickupOrders.filter(order => {
      return order.prepared;
    })

    return readyPickupOrders;
  }

  get pickupOrdersPreparation () {
    const pickupOrders = this.pickuporders.filter(order => order.type === "Pick up");

    const preparationPickupOrders = pickupOrders.filter(order => {
      return !order.prepared;
    })

    return preparationPickupOrders;
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
  handleOrdersDelivery(index: number) {
    
  }

  handleOrdersPickup() {
    setTimeout(() => {
      this.pickuporders = this.pickuporders.filter(order => !order.prepared);
    }, 2000)
  }
}