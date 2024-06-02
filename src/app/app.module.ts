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

@NgModule({
  declarations: [
    AppComponent,
    FloormanagerComponent,
    KitchenstaffComponent,
    PickupComponent,
    SvgiconsComponent,
    OrdersComponent,
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
