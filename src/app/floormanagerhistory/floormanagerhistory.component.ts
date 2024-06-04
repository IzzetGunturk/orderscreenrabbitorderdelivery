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
  email?: string;
  phonenumber?: string;
  orderedtime?: string;
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
  selector: 'app-floormanagerhistory',
  templateUrl: './floormanagerhistory.component.html',
  styleUrl: './floormanagerhistory.component.scss'
})
export class FloormanagerhistoryComponent {

  orders: Order[] = [
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
    }
  ]

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
    } else {
      return 'default-icon';
    }
  }

  // modal
  modalVisible: any = null;

  openModal(order: Order) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }

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
      ...this.orders
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
  
  constructor() {
    this.currentDateTime = new Date();
  }
}
