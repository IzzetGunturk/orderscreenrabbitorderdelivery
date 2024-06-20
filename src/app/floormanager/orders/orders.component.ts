import { Component, Input, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Order } from '../interfaces/order.interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements AfterViewInit, AfterViewChecked {
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

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngAfterViewChecked(): void {
    this.updateButtonAndEllipsis();
  }

  updateButtonAndEllipsis() {
    const buttonViewMore = this.buttonViewMore.toArray();
    const orders = this.commentandorderinformation.toArray();
    const ellipsis = this.ellipsis.toArray();
  
    orders.forEach((order, index) => {
      const button = buttonViewMore[index].nativeElement;
      const orderType = button.getAttribute('data-order-type');
      const ellipsisOverlay = ellipsis[index].nativeElement;

      if (orderType == 'Restaurant') {
        if (order.nativeElement.offsetHeight > 90) {
          button.style.display = 'flex';
          ellipsisOverlay.style.display = 'block';
        } else {
          button.style.display = 'none';
          ellipsisOverlay.style.display = 'none';
        }
      } 
      else if (order.nativeElement.offsetHeight > 90) {
        button.style.display = 'flex';
        ellipsisOverlay.style.display = 'block';
      }
      else {
        ellipsisOverlay.style.display = 'none';
      }
    });
  }
  
  initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      grabCursor: true
    });
  }
}
