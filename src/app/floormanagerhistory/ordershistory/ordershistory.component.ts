import { Component, Input, AfterViewChecked, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Order } from '../interfaces/floormanagerhistory.interfaces';

@Component({
  selector: 'app-ordershistory',
  templateUrl: './ordershistory.component.html',
  styleUrl: './ordershistory.component.scss'
})

export class OrdershistoryComponent implements AfterViewChecked {
  @Input() orders: Order[] = [];
  @Input() showRecoverButton: boolean = false;
  @Input() intransitorders: Order[] = [];
  @Input() inpreparationorders: Order[] = [];
  @Input() readyforpickuporders: Order[] = [];

  @ViewChildren('commentandorderinformation') commentandorderinformation!: QueryList<ElementRef>;
  @ViewChildren('buttonViewMore') buttonViewMore!: QueryList<ElementRef>;
  @ViewChildren('ellipsis') ellipsis!: QueryList<ElementRef>;

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

  ngAfterViewChecked() {
    this.updateViewMoreButtons();
  }

  updateViewMoreButtons() {
    const buttonViewMore = this.buttonViewMore.toArray();
    const orders = this.commentandorderinformation.toArray();
    const ellipsis = this.ellipsis.toArray();
  
    orders.forEach((order, index) => {
      const button = buttonViewMore[index].nativeElement;
      const orderType = button.getAttribute('data-order-type');
      const ellipsisOverlay = ellipsis[index].nativeElement;

      if (orderType == 'Restaurant') {
        if (order.nativeElement.offsetHeight > 300) {
          button.style.display = 'flex';
          ellipsisOverlay.style.display = 'block';
        } else {
          button.style.display = 'none';
          ellipsisOverlay.style.display = 'none';
        }
      } 
      else if (order.nativeElement.offsetHeight > 265) {
        button.style.display = 'flex';
        ellipsisOverlay.style.display = 'block';
      }
      else {
        ellipsisOverlay.style.display = 'none';
      }
    });
  }
}
