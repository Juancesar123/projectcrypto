import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListnewchatPage } from './../listnewchat/listnewchat';
import { BroadcastPage } from './../broadcast/broadcast';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private firebase: Firebase) {
    this.firebase.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));
  
  this.firebase.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }
  newMessagepage(){
    this.navCtrl.push(ListnewchatPage)
  }
  newBroadcastmessagepage(){
    this.navCtrl.push(BroadcastPage)
  }
  
}
