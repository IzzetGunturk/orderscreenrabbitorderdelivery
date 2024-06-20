import { Component, OnInit  } from '@angular/core';
import { DeliveryInformation } from './interfaces/floormanagercouriers.interfaces';
declare var google: any;

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
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapProperties);

  const centerOfMap = map.getCenter();

  const deliveryguy1 = new google.maps.Marker({
    position: new google.maps.LatLng(51.80870196273554, 5.723867434221573),
    map: map,
    icon: {
      url: "../../assets/couriers/courier4.jpg",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(50, 50), 
      borderRadius: '50%', 
    },
  });

  const deliveryguy2 = new google.maps.Marker({
    position: new google.maps.LatLng(51.806544596389024, 5.728441013200699),
    map: map,
    icon: {
      url: "../../assets/couriers/courier1.jpg",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(50, 50), 
      borderRadius: '50%', 
    },
  });

  const restaurant = new google.maps.Marker({
    position: new google.maps.LatLng(51.806978528043444, 5.725604918402152),
    map: map,
    icon: {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FAA419"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>'),
      scaledSize: new google.maps.Size(50, 50)
    },
  });
  }
}
