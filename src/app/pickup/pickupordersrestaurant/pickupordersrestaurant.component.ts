import { Component, Input } from '@angular/core';
import { RestaurantOrder } from '../interfaces/pickup.interfaces';

@Component({
  selector: 'app-pickupordersrestaurant',
  templateUrl: './pickupordersrestaurant.component.html',
  styleUrl: './pickupordersrestaurant.component.scss'
})
export class PickupordersrestaurantComponent {
  @Input() restaurantorders: RestaurantOrder[] = [];

  // filter orders
  restaurantOrders(prepared: boolean) {
    return this.restaurantorders.filter(order => order.type == 'Restaurant' && order.prepared == prepared)
  }

  restaurantOrdersReady() {
    return this.restaurantOrders(true);
  }

  restaurantOrdersPreparation() {
    return this.restaurantOrders(false);
  }

  // mark order done
  handleOrderRestaurant(index: number) {
    if (index < this.restaurantorders.length) {
      const order = document.getElementsByClassName('order-restaurant')[index];
  
      if (order) {
        order.classList.add('fade-out');
      }
  
      setTimeout(() => {
        this.restaurantorders.splice(index, 1);
      }, 2000);
    }
  }

  // modal
  modalVisible: any = null;

  openModal(order: any) {
    this.modalVisible = order;
  }

  closeModal() {
    this.modalVisible = null;
  }
}
