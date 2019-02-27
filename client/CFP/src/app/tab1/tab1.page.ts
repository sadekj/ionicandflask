import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WeatherService } from '../weather.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data:any;
  userid: any;
  posts: any;
  fullNameChecked: boolean;
  constructor(public navCtrl : NavController,
    private weatherService:WeatherService,
    private storage: Storage){
      

  }

  ionViewWillEnter(){
    this.storage.get('userid').then(userid =>{
      if(userid != null){
        this.userid = userid;
      }else{
        this.userid = 0;
      }
      this.weatherService.getWeather(this.userid).subscribe(response => {
        console.log(response);
        this.data=response;
        if(this.data.id == 0){
          this.data.id = this.userid;
          this.data.fname = this.data.lname = this.data.email = this.data.username = this.data.msg
        }
      });
    });
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
      this.weatherService.getPosts(10).subscribe(response => {
        console.log(response);
        this.posts = response;
      });
      console.log(this.fullNameChecked);
    });
  }
}
