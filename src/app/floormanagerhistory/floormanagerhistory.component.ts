import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Order } from '../floormanagerhistory/interfaces/floormanagerhistory.interfaces';

@Component({
  selector: 'app-floormanagerhistory',
  templateUrl: './floormanagerhistory.component.html',
  styleUrl: './floormanagerhistory.component.scss'
})

export class FloormanagerhistoryComponent implements OnInit {

  orders: Order[] = [
    {
      deliverycompanyicon: '',
      id: 1232,
      type: 'Delivery',
      comment: '',
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
      namecustomer: 'David Jones',
      orderedtime: 'Ordered: 2-4-2024 13:04',
      pickuptime: '16:50',
      email: 'davidjones@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Bergstraat 17, 6215 AA Wijchen',
      dishes: [
        { name: 'Chili Sin Carne', quantity: 1 },
        { name: 'Pepsi Regular', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1230,
      type: 'Restaurant',
      tablenumber: 6,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 13:04',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Zeebaarsfilet', option: ['Hollandaisesaus'], quantity: 1 },
        { name: 'Pepsi Regular', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1229,
      type: 'Restaurant',
      tablenumber: 6,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 14:13',
      pickuptime: 'ZSM',
      dishes: [
        { name: "Oma's Chili", option: ['Zonder tomaat'], quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1228,
      type: 'Delivery',
      comment: 'Salade zonder tomaat graag',
      namecustomer: 'Andre Samuel',
      orderedtime: 'Ordered: 2-4-2024 15:04',
      pickuptime: '16:45',
      email: 'Andree2@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Burchtstraat 8, 6241 CR Wijchen',
      dishes: [
        { name: 'Crazy Pulled Pork Burger', quantity: 1 },
        { name: 'Visburger Ravigotte', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: ' Chili Sin Carne', quantity: 2 },
        { name: "Oma's Chili", option: ['Zonder tomaat'], quantity: 1 },
        { name: 'Pepsi Regular', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1227,
      type: 'Delivery',
      comment: '',
      namecustomer: 'Kadir Senturk',
      orderedtime: 'Ordered: 2-4-2024 13:04',
      pickuptime: '16:30',
      email: 'Andree2@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Nieuweweg 93, 6603 BK Wijchen',
      dishes: [
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: '5Kitchens Salade', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1226,
      type: 'Pick up',
      comment: '',
      namecustomer: "Ethan O'Connor",
      orderedtime: 'Ordered: 2-4-2024 15:04',
      pickuptime: '16:20',
      email: 'ethan7@hotmail.com',
      phonenumber: '+31 6 21529854',
      dishes: [
        { name: 'Gelakte Spareribs', option: ['BBQ Sauce'], quantity: 2 },
        { name: 'Crispy fries', quantity: 2 },
        { name: 'Pepsi Regular', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1225,
      type: 'Pick up',
      comment: '',
      namecustomer: "Charlotte Lee",
      orderedtime: 'Ordered: 1-4-2024 12:00',
      pickuptime: '16:20',
      email: 'charlottelee@hotmail.com',
      phonenumber: '+31 6 21529854',
      dishes: [
        { name: 'Crazy Pulled Pork Burger', quantity: 1 },
        { name: 'Visburger Ravigotte', quantity: 1 },
        { name: '5Kitchens Salade', quantity: 1 },
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
      ]
    },
    {
      deliverycompanyicon: 'thuisbezorgd',
      id: 1224,
      type: 'Delivery',
      comment: 'Extra servetjes',
      namecustomer: 'Thomas Laar',
      orderedtime: 'Ordered: 1-4-2024 13:04',
      pickuptime: '16:15',
      email: 'thomasje@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Spoorstraat 16A , 6602 AZ Wijchen',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1 },
        { name: 'Sweet Pork Wrap', quantity: 1 },
        { name: 'Wrap Spicy Chicken', quantity: 1 },
        { name: "Wrap Smokin' Hot Beef", quantity: 1 },
        { name: "Sprite", quantity: 3 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1223,
      type: 'Restaurant',
      tablenumber: 5,
      comment: '',
      orderedtime: 'Ordered: 1-4-2024 13:11',
      pickuptime: 'ZSM',
      dishes: [
        { name: "Indische Saté", option: ['Varkenshaassaté'], quantity: 1 },
        { name: "Salade Caesar Crispy Chick'n", quantity: 1 },
        { name: 'Spa blauw', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1222,
      type: 'Restaurant',
      tablenumber: 6,
      comment: '',
      orderedtime: 'Ordered: 1-4-2024 13:10',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Chili Sin Carne', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1221,
      type: 'Delivery',
      comment: '',
      namecustomer: 'Abdel Hamid',
      orderedtime: 'Ordered: 1-4-2024 13:04',
      pickuptime: '16:15',
      email: 'Abdel@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Rietgorsstraat 19, 6601 EA Wijchen',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1 },
        { name: "Sprite", quantity: 3 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1220,
      type: 'Delivery',
      comment: '',
      namecustomer: 'Kees Bakker',
      orderedtime: 'Ordered: 1-4-2024 13:04',
      pickuptime: '16:10',
      email: 'Abdel@hotmail.com',
      phonenumber: '+31 6 21529854',
      address: 'Ringlaan 162, 6602 EE Wijchen',
      dishes: [
        { name: 'Wrap Crispy Chicken', quantity: 1 },
        { name: "Sprite", quantity: 3 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1119,
      type: 'Pick up',
      comment: '',
      namecustomer: "Sarah Olivia",
      orderedtime: 'Ordered: 1-4-2024 16:00',
      pickuptime: '16:10',
      email: 'saraholivia96@hotmail.com',
      phonenumber: '+31 6 21529854',
      dishes: [
        { name: 'Crazy Pulled Pork Burger', quantity: 1 },
        { name: 'Fanta', quantity: 4 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1118,
      type: 'Restaurant',
      tablenumber: 9,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:13',
      pickuptime: 'ZSM',
      dishes: [
        { name: "Oma's Chili", option: ['Zonder tomaat'], quantity: 1 },
        { name: 'Crazy Pulled Pork Burger', quantity: 1 },
        { name: 'Fanta', quantity: 1 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },
    {
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },{
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },{
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
      ]
    },{
      deliverycompanyicon: '',
      id: 1117,
      type: 'Restaurant',
      tablenumber: 3,
      comment: '',
      orderedtime: 'Ordered: 2-4-2024 12:00',
      pickuptime: 'ZSM',
      dishes: [
        { name: 'Pizza Tonno', quantity: 3 },
        { name: 'Fanta', quantity: 4 },
        { name: 'Carpaccio Salade', quantity: 1 },
        { name: 'Zalmfilet', option: ['Vissaus'], quantity: 2 },
        { name: 'Chili Sin Carne', quantity: 2 },
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
  
    return orders.filter(order => {
      const matchesFilterType = !this.filterType || order.type === this.filterType;
      const matchesSearchValue = !this.searchValue || 
        order.id.toString().includes(this.searchValue) ||
        (order.namecustomer && order.namecustomer.toLowerCase().includes(this.searchValue.toLowerCase())) || 
        (order.orderedtime && order.orderedtime.toLowerCase().includes(this.searchValue.toLowerCase())) ||
        (order.address && order.address.toLowerCase().includes(this.searchValue.toLowerCase()));
      
      return matchesFilterType && matchesSearchValue;
    });
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
      order.address?.toLowerCase().includes(this.searchValue) || 
      order.orderedtime?.includes(this.searchValue))
    }
  }

  // date time
  currentDateTime: Date;

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.currentDateTime = new Date();
    })
  }

  constructor() {
    this.currentDateTime = new Date()
    console.log(this.allPages);
  }

  // amount orders
  get amountTotalOrders(): number {
    return this.orders.length;
  }

  amountOrders(type: string) {
    return this.orders.filter(order => order.type == type).length;
  }

  get amountDeliveryOrders(): number {
    return this.amountOrders('Delivery');
  }

  get amountPickupOrders(): number {
    return this.amountOrders('Pick up')
  }

  get amountRestaurantOrders(): number {
    return this.amountOrders('Restaurant')
  }

  //pagination
  currentPage = 1;
  ordersPerPage = 14;

  get paginatedOrders() {
    const startIndex = (this.currentPage - 1) * this.ordersPerPage;
    const endIndex = startIndex + this.ordersPerPage;
    return this.getFilteredOrders(this.orders).slice(startIndex, endIndex);
  }

  get allPages () {
    const pagesNumbers: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesNumbers.push(i);  
    }

    return pagesNumbers;
  }

  goToPages(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages() {
    const filteredOrdersPages = this.getFilteredOrders(this.orders).length;
    return Math.ceil(filteredOrdersPages / this.ordersPerPage);
  }

  previousButton() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextButton() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
