import { Component, OnInit  } from '@angular/core';
declare var google: any;
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
export class FloormanagercouriersComponent implements OnInit {
  
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

  // map
  ngOnInit(): void {
    this.loadMap();
  }

 loadMap() {
  const mapProperties = {
    center: new google.maps.LatLng(51.807098610817185, 5.725634425673384),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapProperties);

  const centerOfMap = map.getCenter();

  const marker = new google.maps.Marker({
    position: centerOfMap,
    map: map,
    icon: {
      url: "../../assets/couriers/courier4.jpg",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(50, 50), 
      borderRadius: '50%', 
    },
  });

  const marker2 = new google.maps.Marker({
    position: { lat: centerOfMap.lat() + 0.001, lng: centerOfMap.lng() + 0.001 },
    map: map,
    icon: {
      url: "../../assets/couriers/courier4.jpg",
      scaledSize: new google.maps.Size(50, 50),
    },
  });

  const marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(51.806978528043444, 5.725604918402152),
    map: map,
    icon: {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="orange" /></svg>'),
      scaledSize: new google.maps.Size(24, 24)
    },
  });
  }
}
