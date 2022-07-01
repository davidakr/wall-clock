import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController, ToastController} from 'ionic-angular';


/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private url: any;
  private addOn: string;
  private name: string;
  private rgb: number[];
  private temperature: number;
  private status: boolean;
  private sensor: boolean;
  private brightness: number;
  private timezone: number;
  


 
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
      this.rgb = [300, 300, 300];
       
  }
  public getURL(){
    return this.url;
  }
  public setURL(url: any){
    this.url = url;    
  }
  public check(){
    if(this.name === 'WallClock') {
      return true;
    } else {
      return false;
    }
  }
  public getStatus(){
    return this.status;
  }
  public setStatus(state: boolean){
    if(state == true) {
      this.addOn += 'STATE_STATUS=1&';
    } else {
      this.addOn += 'STATE_STATUS=0&';
    }
  }
  public getSensor() {
    return this.sensor;
  }
  public setSensor(state: boolean){
    if(state === true) {
      this.addOn += 'BRIGHTNESS_STATUS=0&';
    } else {
      this.addOn += 'BRIGHTNESS_STATUS=1&';
    }
  }
  public setBrightness(brightness: Int16Array){   
      this.addOn += 'BRIGHTNESS_VALUE=' + brightness + '&';       
  }
  public getBrightness(){
    return this.brightness;       
  }
  public getAddOn(){
    return this.addOn;
  }
  public resetAddOn(){
    this.addOn = '';
  }
  public setData(data: any){
    this.name = data.NAME;
    this.rgb[0] = data.RED_RGB;
    this.rgb[1] = data.GREEN_RGB;
    this.rgb[2] = data.BLUE_RGB; 
    this.temperature = data.TEMPERATURE;
    this.status = data.STATE_STATUS;
    this.sensor = (data.BRIGHTNESS_STATUS == "0");
    this.brightness = data.BRIGHTNESS_VALUE;
    this.timezone = data.TIMEZONE;
  }
  public getRGB(){
    return this.rgb;
  }
  public setRGB(rgb: number[]){
    if(this.rgb[0] < 256) {
      this.addOn += 'RED_RGB=' + this.rgb[0] +'&';
    }
    if(this.rgb[1] < 256) {
      this.addOn += 'GREEN_RGB=' + this.rgb[1] +'&';
    } 
    if(this.rgb[2] < 256) {
      this.addOn += 'BLUE_RGB=' + this.rgb[2] +'&';
    }
    
  }
 

}
