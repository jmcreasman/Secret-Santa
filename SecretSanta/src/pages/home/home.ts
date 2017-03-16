import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountPage } from '../account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  nextPage() {
     this.navCtrl.push(AccountPage);
  }
}
