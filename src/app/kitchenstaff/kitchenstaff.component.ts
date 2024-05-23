// kitchenstaff.component.ts
import { Component } from '@angular/core';

interface Order {
  icon: string;
  id: number;
  type: string;
  dishes: Dish[];
}

interface Dish {
  name: string;
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
      icon: 'check',
      id: 1234,
      type: 'pickup',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1, prepared: false },
        { name: '5Kitchens Salade', quantity: 1, prepared: false },
        { name: 'Fanta', quantity: 1, prepared: false }
      ]
    },
  ];

  togglePreparedStatus(dishes: Dish) {
    dishes.prepared = !dishes.prepared;
  }
}
