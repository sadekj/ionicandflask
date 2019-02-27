import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data:any;
  fname:String;
  lname:String;
  email:String;
  username:String;
  password:String;

  showSignUp:boolean = false;
  showSignIn:boolean = false;

  constructor(public navCtrl : NavController,
    private weatherService: WeatherService,
    private storage: Storage) {
      this.data={
        msg:undefined
      }
  }
  signup(){
    const user={
      fname : this.fname,
      lname : this.lname,
      email : this.email,
      username : this.username,
      password : this.password
    }
    this.weatherService.addUser(user).subscribe(response => {
      this.data = response;
    });
  }
  signin(){
    const user={
      username : this.username,
      password : this.password
    }
    this.weatherService.signIn(user).subscribe(response => {
      if(!response.id || response.id == 0){
        this.data = response;
      }else{
        this.data.msg = "logged in as " + response.username + " with id (" + response.id + ")";
        this.storage.set("userid", response.id);
      }
    });
  }
  showSignInForm(){
    console.log("showSignInForm clicked");
    this.showSignUp = false;
    this.showSignIn = true;
  }
  showSignUpForm(){
    console.log("showSignUpForm clicked");
    this.showSignIn = false;
    this.showSignUp = true;
  }
}
