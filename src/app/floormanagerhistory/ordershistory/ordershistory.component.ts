import { Component, Input, AfterViewInit} from '@angular/core';

interface Order {
  deliverycompanyicon: string;
  id: number;
  type: string;
  comment: string;
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
  selector: 'app-ordershistory',
  templateUrl: './ordershistory.component.html',
  styleUrl: './ordershistory.component.scss'
})

export class OrdershistoryComponent implements AfterViewInit {
  @Input() orders: Order[] = [];
  @Input() showRecoverButton: boolean = false;
  @Input() intransitorders: Order[] = [];
  @Input() inpreparationorders: Order[] = [];
  @Input() readyforpickuporders: Order[] = [];

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

  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }

  ngAfterViewInit() {
    this.updateViewMoreButtons();
  }

  ngOnChanges() {
    if (this.orders) {
      this.updateViewMoreButtons();
    }
  }

  updateViewMoreButtons() {
    setTimeout(() => {
      const buttonViewMore = document.querySelectorAll('.buttonViewMore') as NodeListOf<HTMLElement>;
      const orders = document.querySelectorAll('.commentandorderinformation') as NodeListOf<HTMLElement>;
      const ellipsis = document.querySelectorAll('.ellipsis') as NodeListOf<HTMLElement>;
    
      orders.forEach((order, index) => {
        const button = buttonViewMore[index];
        const orderType = button.getAttribute('data-order-type');
        const ellipsisOverlay = ellipsis[index];
  
        if (orderType == 'Restaurant') {
          if (order.offsetHeight > 300) {
            button.style.display = 'flex';
            ellipsisOverlay.style.display = 'block';
          } else {
            button.style.display = 'none';
            ellipsisOverlay.style.display = 'none';
          }
        } 
        else if (order.offsetHeight > 265) {
          button.style.display = 'flex';
          ellipsisOverlay.style.display = 'block';
        }
        else {
          ellipsisOverlay.style.display = 'none';
        }
      });
    }, 0);
  }
}
