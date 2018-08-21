import { Component, ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoadFurdetailsPage } from '../../pages/road-furdetails/road-furdetails';
import { Geolocation } from '@ionic-native/geolocation';
import {Content} from 'ionic-angular';
import {Footer} from 'ionic-angular';

declare var google;
/**
 * Generated class for the RoadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-road-details',
  templateUrl: 'road-details.html',
})
export class RoadDetailsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  @ViewChild(Footer) footer: Footer;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation : Geolocation) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RoadDetailsPage');
    this.footer.setElementStyle("display","none");
  this.content.resize();
  }

ionViewDidEnter(){
	//Set latitude and longitude of some place
	this.map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 17.361579, lng: 78.474603 },
    zoom: 10,
    streetViewControl: false,
    zoomControl: false
	});
}

show() {
  this.footer.setElementStyle("display","block");
  this.content.resize();
}

hide() {
  this.footer.setElementStyle("display","none");
  this.content.resize();
}

push() {
  this.navCtrl.push(RoadFurdetailsPage);    
}

}
