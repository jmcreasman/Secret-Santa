import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/* Page imports */
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
/* Service imports */
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    RegisterPage,
    LoginPage,
    AccountPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    RegisterPage,
    LoginPage,
    AccountPage
  ],
  providers: [AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
