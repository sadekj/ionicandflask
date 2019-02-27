import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  fullNameChecked:boolean;

  constructor(public navCtrl : NavController, private storage: Storage) {
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get("fullNameChecked").then(fullNameChecked => {
      if (fullNameChecked == null) {
        this.fullNameChecked = false;
      } else {
        if (fullNameChecked == 'true') {
          this.fullNameChecked = true;
        } else {
          this.fullNameChecked = false;
        }
      }
    });
  }
  fullNameCheck() {
    this.storage.set("fullNameChecked", ""+this.fullNameChecked);
    console.log(this.fullNameChecked);
    // this.navCtrl.navigateRoot('/tabs/tab1');
  }
}
