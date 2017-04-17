import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountPage } from '../account/account';
import { CreateDrawingPage } from '../create-drawing/create-drawing';
import { ViewDrawingPage } from '../view-drawing/view-drawing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  routeToAccountPage() {
     this.navCtrl.push(AccountPage);
  }
  routeToCreateDrawingPage() {
     this.navCtrl.push(CreateDrawingPage);
  }
  routeToViewDrawingPage() {
     this.navCtrl.push(ViewDrawingPage);
  }
}
