import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {username: '', password: '', confirmPassword: '', email: ''};
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {}
 
  public register() {
    if (this.registerCredentials.password !== this.registerCredentials.confirmPassword) {
      this.showPopup("Error", "Passwords did not match please try again.");
    } else
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.nav.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
}
