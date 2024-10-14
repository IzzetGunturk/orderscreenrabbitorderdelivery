import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloormanagerComponent } from './floormanager/floormanager.component';
import { FloormanagerhistoryComponent } from './floormanagerhistory/floormanagerhistory.component';
import { FloormanagercouriersComponent } from './floormanagercouriers/floormanagercouriers.component';
import { KitchenstaffComponent } from './kitchenstaff/kitchenstaff.component';
import { PickupComponent } from './pickup/pickup.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'floormanager', component: FloormanagerComponent },
  { path: 'floormanager/history', component: FloormanagerhistoryComponent },
  { path: 'floormanager/couriers', component: FloormanagercouriersComponent },
  { path: 'kitchenstaff', component: KitchenstaffComponent },
  { path: 'pickup', component: PickupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
