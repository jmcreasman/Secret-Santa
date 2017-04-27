import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-create-drawing',
  templateUrl: 'create-drawing.html'
})
export class CreateDrawingPage {

  fields: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fields = [
      { title: 'Test' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDrawingPage');
  }

  field = null;

  fieldOptionsVisible = false;
  showFieldOptions() {
    console.log('click');
    this.fieldOptionsVisible = true;
  }
  hideFieldOptions() {
    console.log('click');
    this.fieldOptionsVisible = false;
  }

  //Form field functions
  createParagraphField() {
    console.log('click');
    this.fieldOptionsVisible = false;
  }
  createInputField() {
    console.log('click');
    this.fieldOptionsVisible = false;
  }
  createMultipleChoiceField() {
    console.log('click');
    this.fieldOptionsVisible = false;
  }
  createCheckboxField() {
    console.log('click');
    this.fieldOptionsVisible = false;
  }

}
