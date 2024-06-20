export interface Order {
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

export interface Dish {
  name: string;
  option?: string[];
  quantity: number;
}