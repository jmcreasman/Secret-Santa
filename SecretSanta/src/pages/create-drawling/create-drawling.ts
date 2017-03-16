import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-create-drawling',
  templateUrl: 'create-drawling.html'
})
export class CreateDrawlingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDrawlingPage');
  }

}
