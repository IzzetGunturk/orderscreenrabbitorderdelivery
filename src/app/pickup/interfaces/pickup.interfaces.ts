export interface DeliveryOrder {
  deliverycompanyicon: string;
  id: number;
  type: string;
  comment?: string;
  prepared: boolean;
  address: string;
  deliverytime: string;
  deliveryduration: string;
  routeaddress: string;
}

export interface PickupOrder {
  id: number;
  type: string;
  comment?: string;
  prepared: boolean;
  namecustomer: string;
  dishes: Dish[];
}

export interface RestaurantOrder {
  tablenumber: number;
  type: string;
  comment?: string;
  prepared: boolean;
  dishes: Dish[];
}

export interface Dish {
  name: string;
  option?: string[];
  quantity: number;
}
