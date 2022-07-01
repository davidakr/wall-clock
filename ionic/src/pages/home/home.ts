import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import 'rxjs/add/operator/timeout';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private state: boolean;
  private lightSensor: boolean;
  private brightness: any;
  private rgb: number[];
  private brightnessDisabled: boolean;
  
 
  constructor(public navCtrl: NavController,public dataService: DataProvider, private http: Http,
    private storage: Storage, public alertCtrl: AlertController) {
    this.state = this.dataService.getStatus();
    this.lightSensor = this.dataService.getSensor();
    this.brightness = this.dataService.getBrightness();
    this.rgb = this.dataService.getRGB();
    this.brightnessDisabled = this.lightSensor;
  }

  public update(){
    this.brightnessDisabled = this.lightSensor;
    this.dataService.setStatus(this.state);
    this.dataService.setSensor(this.lightSensor);
    this.dataService.setBrightness(this.brightness);
    this.dataService.setRGB(this.rgb);
    
    console.log(this.dataService.getAddOn());

    this.http.get('http://' + this.dataService.getURL() + '/?' + this.dataService.getAddOn()).timeout(2500).map(res => res.json()).subscribe(data => {
      this.dataService.setData(data);
      this.dataService.resetAddOn();
    }, noRequest => {
      this.showAlert();
      this.storage.set('ip', null);   
      this.dataService.resetAddOn();
      this.navCtrl.setRoot(LoginPage);   
    });          
  }
  private showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No Connection!',
      subTitle: 'IP Adress is wrong or Device is currently not connected!',
      buttons: ['OK']
    });
    alert.present();
  }
}
