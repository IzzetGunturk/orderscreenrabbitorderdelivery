export interface Order {
  icon: string;
  id: number;
  type: string;
  comment ? : string;
  dishes: Dish[];
}

export interface Dish {
  name: string;
  option: string;
  quantity: number;
  prepared: boolean;
}
