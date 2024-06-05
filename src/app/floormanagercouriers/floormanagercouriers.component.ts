import { Component } from '@angular/core';

@Component({
  selector: 'app-floormanagercouriers',
  templateUrl: './floormanagercouriers.component.html',
  styleUrl: './floormanagercouriers.component.scss'
})
export class FloormanagercouriersComponent {
  // date time
  currentDateTime: Date;
  
  constructor() {
    this.currentDateTime = new Date();
  }
}
