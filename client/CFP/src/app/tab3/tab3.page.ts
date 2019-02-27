import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  post: any;
  content: string;
  constructor(public navCtrl: NavController,
    private weatherService: WeatherService,
    private storage: Storage) {
  }
  addPost() {
    console.log("POSTING!");
    this.storage.get('userid').then(userid => {
      this.post = {
        content: this.content,
        userid : userid
      }
      this.weatherService.addPost(this.post).subscribe(response => {
        console.log(response);
      });
    });
  }
}
