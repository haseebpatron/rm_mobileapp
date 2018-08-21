import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RoadDetailsPage } from '../../pages/road-details/road-details';

/**
 * Generated class for the RoadNetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-road-network',
  templateUrl: 'road-network.html',
})
export class RoadNetworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoadNetworkPage');
  }

  push() {
    this.navCtrl.push(RoadDetailsPage);    
  }

}
