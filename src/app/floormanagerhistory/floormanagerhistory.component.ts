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
      id: 1232,
      type: 'Delivery',
      comment: '',
      prepared: true,
      namecustomer: 'Evelien Naar',
      orderedtime: 'Ordered: 2-4-2024 13:40',
      pickuptime: '17:00',
      email: 'evelien3@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Bergstraat 57, 6215 AA Wijchen',
      dishes: [
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1231,
      type: 'Delivery',
      comment: '',
      prepared: true,
      namecustomer: 'David Jones',
      orderedtime: 'Ordered: 2-4-2024 13:04',
      pickuptime: '17:00',
      email: 'davidjones@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Bergstraat 17, 6215 AA Wijchen',
      dishes: [
        { name: 'Chili Sin Carne', option: [''], quantity: 1 },
        { name: 'Pepsi Regular', quantity: 1 },
      ]
    },
    
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
