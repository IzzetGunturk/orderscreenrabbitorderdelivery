// kitchenstaff.component.ts
import { Component } from '@angular/core';

interface Order {
  icon: string;
  id: number;
  type: string;
  comment: string;
  dishes: Dish[];
}

interface Dish {
  name: string;
  option: string;
  quantity: number;
  prepared: boolean;
}

@Component({
  selector: 'app-kitchenstaff',
  templateUrl: './kitchenstaff.component.html',
  styleUrls: ['./kitchenstaff.component.scss']
})
export class KitchenstaffComponent {
  orders: Order[] = [
    {
      icon: 'pickup',
      id: 1234,
      type: 'Pick up',
      comment: '',
      dishes: [
        { name: 'Wrap Crispy Chicken', option: '', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', option: '', quantity: 1, prepared: false },
        { name: 'Fanta', quantity: 1, option: '', prepared: false }
      ]
    },
  ];

  // toggle checkbox
  togglePreparedStatus(dishes: Dish) {
    dishes.prepared = !dishes.prepared;
  }

  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }
}
