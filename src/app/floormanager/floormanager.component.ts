import { Component } from '@angular/core';

interface Order {
  id: number;
  type: string;
  comment: string;
  prepared: boolean;
  namecustomer: string;
  tablenumber?: number;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option: string;
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
      id: 1242,
      type: 'Pick up',
      comment: '',
      prepared: true,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: 'Witte Wijnsaus', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 }
      ]
    },
    {
      id: 1243,
      type: 'Delivery',
      comment: '',
      prepared: true,
      namecustomer: '',
      dishes: [
        { name: 'Pizza Margherita', option: '', quantity: 2 },
        { name: 'Cola', option: '', quantity: 2 }
      ]
    },
    {
      id: 1244,
      type: 'Restaurant',
      comment: '',
      prepared: false,
      tablenumber: 5,
      namecustomer: '',
      dishes: [
        { name: 'Pasta Bolognese', option: 'Tagliatelle', quantity: 1 },
        { name: 'Sprite', option: '', quantity: 1 }
      ]
    }
    // Voeg hier meer orders toe
  ];

  readyforpickuporders: Order[] = [
    {
      id: 1245,
      type: 'Pick up',
      comment: '',
      prepared: true,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: 'Witte Wijnsaus', quantity: 1 },
        { name: '5Kitchens Salade', option: '', quantity: 1 }
      ]
    },
    {
      id: 1246,
      type: 'Delivery',
      comment: 'Geen uien',
      prepared: false,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Pasta Bolognese', option: 'Tagliatelle', quantity: 1 },
        { name: 'Sprite', option: '', quantity: 1 }
      ]
    }
    // Voeg hier meer orders toe
  ];

  intransitorders: Order[] = [
    {
      id: 1247,
      type: 'Restaurant',
      comment: '',
      prepared: false,
      tablenumber: 3,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: 'Pasta Bolognese', option: 'Penne', quantity: 1 },
        { name: 'Pepsi Regular', option: '', quantity: 1 }
      ]
    },
    {
      id: 1248,
      type: 'Delivery',
      comment: '',
      prepared: false,
      namecustomer: 'Emma Jones',
      dishes: [
        { name: "Oma's Chili", option: 'Zonder tomaat', quantity: 1 },
        { name: 'Fanta', option: '', quantity: 1 }
      ]
    }
    // Voeg hier meer orders toe
  ];

  currentDateTime: Date;
  showRecoverButton: boolean = false;
  modalVisible: any = null;

  constructor() {
    this.currentDateTime = new Date();
  }

  openModal(order: any) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }

  getIcon(type: string): string {
    switch (type) {
      case 'Delivery':
        return 'delivery';
      case 'Pick up':
        return 'pickup';
      case 'Restaurant':
        return 'restaurant';
      default:
        return 'default-icon'; // Fallback icon
    }
  }
}
