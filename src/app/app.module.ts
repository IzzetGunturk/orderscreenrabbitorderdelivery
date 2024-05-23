import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloormanagerComponent } from './floormanager/floormanager.component';
import { KitchenstaffComponent } from './kitchenstaff/kitchenstaff.component';
import { PickupComponent } from './pickup/pickup.component';
import { SvgiconsComponent } from './svgicons/svgicons.component';

@NgModule({
  declarations: [
    AppComponent,
    FloormanagerComponent,
    KitchenstaffComponent,
    PickupComponent,
    SvgiconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
