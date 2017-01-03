import {Component, ViewChild} from "@angular/core";
import {Nav, Platform, Modal, NavController} from "ionic-angular";
import { StatusBar } from 'ionic-native';
import { CouchDB } from '../providers/couch-db';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AnagraficaPersonaFisicaPage } from '../pages/anagrafica-persona-fisica/anagrafica-persona-fisica';
import { RicerchePersonaFisicaPage } from '../pages/ricerche-persona-fisica/ricerche-persona-fisica';



@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage = "";
  @ViewChild('rootNavController') navCtrl: NavController;
 
  constructor(platform: Platform, public db: CouchDB) {
    platform.ready().then(() => {      
      StatusBar.styleDefault();      
    });
    
  }
  
  ngOnInit() {
    this.db.open('torsello','essequel2016','attendance','moodle.torsello.ovh','5984');      
    this.navCtrl.setRoot(RicerchePersonaFisicaPage);   
  }
    
  
}
