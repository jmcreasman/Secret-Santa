import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/* Page imports */
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { CreateDrawlingPage } from '../pages/create-drawling/create-drawling';
import { ViewDrawlingPage } from '../pages/view-drawling/view-drawling';
import { InboxPage } from '../pages/inbox/inbox';
/* Service imports */
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    AccountPage,
    CreateDrawlingPage,
    ViewDrawlingPage,
    InboxPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    AccountPage,
    CreateDrawlingPage,
    ViewDrawlingPage,
    InboxPage
  ],
  providers: [AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
