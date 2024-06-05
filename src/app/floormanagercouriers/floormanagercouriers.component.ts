import { Component } from '@angular/core';

interface DeliveryInformation {
  picture: any,
  name: string,
  deliverycompanyicon: string,
  id: number,
  returntime: string,
  address: string,
  comment: string,
}

@Component({
  selector: 'app-floormanagercouriers',
  templateUrl: './floormanagercouriers.component.html',
  styleUrls: ['./floormanagercouriers.component.scss'] // Corrected
})
export class FloormanagercouriersComponent {
  
  deliveryorders: DeliveryInformation[] = 
  [
    {
      picture: "../../assets/couriers/courier1.jpg",
      name: 'Hassan Razzouki',
      deliverycompanyicon: 'ubereats',
      id: 1233,
      returntime: '17:05',
      address: 'Karekietstraat 1, 6601 DS Wijchen',
      comment: '',
    },
    {
      picture: "../../assets/couriers/courier2.jpg",
      name: 'Joey Leenden',
      deliverycompanyicon: 'thuisbezorgd',
      id: 1234,
      returntime: '17:05',
      address: 'Karekietstraat 1, 6601 DS Wijchen',
      comment: '',
    },
    {
      picture: "../../assets/couriers/courier3.jpg",
      name: 'Mike van den Broek',
      deliverycompanyicon: 'thuisbezorgd',
      id: 1235,
      returntime: '17:20',
      address: 'Cunerahof 13, 6601 AE Wijchen',
      comment: '',
    },
    {
      picture: "../../assets/couriers/courier4.jpg",
      name: 'Klaas Bakker',
      deliverycompanyicon: 'thuisbezorgd',
      id: 1236,
      returntime: '17:30',
      address: 'Oud Ravensteinseweg 7, 6602 AC Wijchen',
      comment: 'Graag kloppen ipv bellen',
    },
  ]

  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }
}
