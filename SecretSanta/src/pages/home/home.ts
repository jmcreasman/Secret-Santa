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

  drawings: Array<{title: string, component: any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.drawings = [
      { title: 'Test Drawing', component: AccountPage },
      { title: 'My Inbox', component: CreateDrawingPage },
    ]
  }
  
  routeToAccountPage() {
     this.navCtrl.push(AccountPage);
  }
  routeToCreateDrawingPage() {
     this.navCtrl.push(CreateDrawingPage);
  }
  routeToViewDrawingPage() {
     this.navCtrl.push(ViewDrawingPage);
  }

  openDrawing(drawing) {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(drawing.component);
  }
}
