import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadDetailsPage } from './road-details';

@NgModule({
  declarations: [
    RoadDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadDetailsPage),
  ],
})
export class RoadDetailsPageModule {}
