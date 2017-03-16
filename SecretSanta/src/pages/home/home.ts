import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountPage } from '../account/account';
import { CreateDrawlingPage } from '../create-drawling/create-drawling';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  routeToAccountPage() {
     this.navCtrl.push(AccountPage);
  }
  routeToCreateDrawlingPage() {
     this.navCtrl.push(CreateDrawlingPage);
  }
}
