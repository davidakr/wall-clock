import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataProvider } from '../../providers/data/data';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ipAdress: string;
  rememberMe: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider,
    private http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    private storage: Storage) {      
    this.rememberMe = true;
    storage.get('ip').then((val) => {
      if( val != null) {
        this.ipAdress = val;
        this.login();
      }
    });
    
  } 
  public login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.dataService.setURL(this.ipAdress);

    this.http.get('http://' + this.dataService.getURL()).map(res => res.json()).subscribe(data => {
      this.dataService.setData(data);
      if(this.dataService.check()){
        //this.storage.set('url', this.dataService.getURL());
        this.navCtrl.setRoot(HomePage);
        if (this.rememberMe == true) {
          this.storage.set('ip', this.dataService.getURL());
        } 
      } else {
        this.showAlert();
        this.storage.set('ip', null);
      }
      loading.dismiss();      
    }, noRequest => {
      this.showAlert();
      this.storage.set('ip', null);
      loading.dismiss();   
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

