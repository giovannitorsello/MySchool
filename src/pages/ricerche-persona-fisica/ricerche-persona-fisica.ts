import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AnagraficaPersonaFisicaPage } from '../anagrafica-persona-fisica/anagrafica-persona-fisica';
import { CouchDB } from '../../providers/couch-db';


/*
  Generated class for the RicerchePersonaFisica page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ricerche-persona-fisica',
  templateUrl: 'ricerche-persona-fisica.html'
})

export class RicerchePersonaFisicaPage {
     
     //db: CouchDB;
     listaPersone: any;
     key_search: any;
     selectedItem: any;
	


  constructor(public navCtrl: NavController, public navParams: NavParams, public db: CouchDB) {
      
      console.log("Database anagrafica persone fisiche");
      //this.db.open('torsello','essequel2016','attendance','moodle.torsello.ovh','5984');
      this.db.info();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RicerchePersonaFisicaPage');
  }


	search_persona_fisica(value)
	{
		this.key_search=value;
		//Execure view in database
		this.db.search("persona_fisica/view_persona_fisica_general", this.key_search).then( (data) => {
                    this.listaPersone = data;    		
                });		

	}

	open_persona_fisica(event, p)
	{
		console.log("Selezionato item!");
		console.log(p);
		this.selectedItem=p;		
  		this.navCtrl.push(AnagraficaPersonaFisicaPage, {persona_fisica_selected: p}, {animate: true, direction: 'back'}).then(() => {});
	}

        inserisci_persona_fisica(event)
        {
            this.navCtrl.push(AnagraficaPersonaFisicaPage, {persona_fisica_selected: {}}, {animate: true, direction: 'next'}).then(() => {});
        }


}
