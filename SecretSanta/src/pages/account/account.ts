import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  newFavoriteFormVisible = false;

  openNewFavoriteForm() {
    console.log('click');
    this.newFavoriteFormVisible = true;
  }

  closeNewFavoriteForm() {
    console.log(this.answeredQuestions)
    this.newFavoriteFormVisible = false;
  }

  todo = {}

  answeredQuestions = [
    { title: 'Favorite Color', answer: 'Red' },
    { title: 'Favorite Candy', answer: 'Nerds' },
  ];

}
