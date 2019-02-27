import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  serverUrl;
  getUserUrl;
  getPostUrl;
  addUserUrl;
  addPostUrl;
  signInUrl;
  postsUrl;
  data:Observable<any>;

  constructor(public http:HttpClient) { 
    console.log("Hello Weather service!");
    // this.url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";
    // this.url = "http://ip.jsontest.com/";
    // this.url = "http://echo.jsontest.com/key/value/one/two/three/four";
    this.serverUrl = "http://localhost:5000";
    this.getUserUrl = this.serverUrl + "/user";
    this.getPostUrl = this.serverUrl+ "/post";
    this.addUserUrl = this.serverUrl + "/addUser"
    this.addPostUrl = this.serverUrl+ "/addPost"
    this.signInUrl = this.serverUrl + "/signIn"
    this.postsUrl = this.serverUrl+ "/posts"
  }
  getWeather(userid:any){
    this.data =  this.http.get(this.getUserUrl+"/"+userid);
    console.log(this.data);
    return this.data;
  }
  addUser(user:any){
    console.log(JSON.stringify(user));
    this.data = this.http.get(this.addUserUrl+"/"+JSON.stringify(user));
    return this.data;
  }
  signIn(user:any){
    this.data = this.http.get(this.signInUrl+"/"+JSON.stringify(user));
    return this.data;
  }
  addPost(post: any) {
    this.data = this.http.get(this.addPostUrl + "/" + JSON.stringify(post));
    return this.data;
  }
  getPost(post: any) {
    this.data = this.http.get(this.getPostUrl + "/" + JSON.stringify(post));
    return this.data;
  }
  getPosts(limit: any) {
    this.data = this.http.get(this.postsUrl + "/" + limit);
    return this.data;
  }
  // getWeather(){
  //   this.http.get(this.url, {}, {})
  // .then(data => {

  //   console.log(data.status);
  //   console.log(data.data); // data received by server
  //   console.log(data.headers);

  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });
  // }
}
