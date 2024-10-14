import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloormanagerComponent } from './floormanager/floormanager.component';
import { KitchenstaffComponent } from './kitchenstaff/kitchenstaff.component';
import { PickupComponent } from './pickup/pickup.component';
import { SvgiconsComponent } from './svgicons/svgicons.component';
import { OrdersComponent } from './floormanager/orders/orders.component';
import { FloormanagerhistoryComponent } from './floormanagerhistory/floormanagerhistory.component';
import { OrdershistoryComponent } from './floormanagerhistory/ordershistory/ordershistory.component';
import { FloormanagercouriersComponent } from './floormanagercouriers/floormanagercouriers.component';
import { PickupordersdeliveryComponent } from './pickup/pickupordersdelivery/pickupordersdelivery.component';
import { PickupordersComponent } from './pickup/pickuporders/pickuporders.component';
import { PickupordersrestaurantComponent } from './pickup/pickupordersrestaurant/pickupordersrestaurant.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FloormanagerComponent,
    KitchenstaffComponent,
    PickupComponent,
    SvgiconsComponent,
    OrdersComponent,
    FloormanagerhistoryComponent,
    OrdershistoryComponent,
    FloormanagercouriersComponent,
    PickupordersdeliveryComponent,
    PickupordersComponent,
    PickupordersrestaurantComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
