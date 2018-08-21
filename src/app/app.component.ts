import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RoadNetworkPage } from '../pages/road-network/road-network';
import { RoadDetailsPage } from '../pages/road-details/road-details';
import { RoadFurdetailsPage } from '../pages/road-furdetails/road-furdetails';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Road Network', component: RoadNetworkPage, icon: 'document'},
      {title: 'Bridges', component: HomePage, icon: 'document'},
      {title: 'Rest Areas', component: HomePage, icon: 'document'},
      {title: 'Pavements', component: HomePage, icon: 'document'},
      {title: 'Traffic Services', component: HomePage, icon: 'document'},
      {title: 'Settings', component: SettingsPage, icon: 'cog'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
