import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloormanagerComponent } from './floormanager/floormanager.component';
import { FloormanagerhistoryComponent } from './floormanagerhistory/floormanagerhistory.component';
import { KitchenstaffComponent } from './kitchenstaff/kitchenstaff.component';
import { PickupComponent } from './pickup/pickup.component';

const routes: Routes = [
  { path: 'floormanager', component: FloormanagerComponent },
  { path: 'floormanager/history', component: FloormanagerhistoryComponent },
  { path: 'kitchenstaff', component: KitchenstaffComponent },
  { path: 'pickup', component: PickupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
