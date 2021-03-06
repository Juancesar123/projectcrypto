import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BroadcastPageModule } from './../pages/broadcast/broadcast.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { ContactPageModule } from './../pages/contact/contact.module';
import { ListnewchatPageModule } from './../pages/listnewchat/listnewchat.module';
import { Firebase } from '@ionic-native/firebase';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegisterPageModule,
    ListnewchatPageModule,
    ContactPageModule,
    BroadcastPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    Firebase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
