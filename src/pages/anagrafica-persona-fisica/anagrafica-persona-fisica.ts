import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PersonaFisica } from '../../entities/persona-fisica';
import { CouchDB } from '../../providers/couch-db';


/*
  Generated class for the AnagraficaPersonaFisica page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-anagrafica-persona-fisica',
  templateUrl: 'anagrafica-persona-fisica.html'
})

export class AnagraficaPersonaFisicaPage {

    @Input() persona_fisica: PersonaFisica;
    @Output() persona_fisicaChange=new EventEmitter<PersonaFisica>();
    data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: CouchDB) {
      console.log("Inserisci anagrafica persona fisica. Database: ");
      this.db.info();              
      if(!this.persona_fisica) this.persona_fisica= new PersonaFisica('PersonaFisica','Studente','','','','','','','','','');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnagraficaPersonaFisicaPage');
  }

  save() 
  {
      console.log("Saved!!!!");
      console.log(this.persona_fisica);
  }
   
  clear() {
    this.persona_fisica= new PersonaFisica('PersonaFisica','Studente','','','','','','','','','');            
  } 
    
    
   createPersonaFisica(p) {
        this.db.create(p);        
   }

   updatePersonaFisica(p) {
        this.db.update(p);        
   }

   deletePersonaFisica(p) {
        this.db.delete(p);
    }

   getPersonaFisica_All() {
        return this.db.getAll();        
   }

   handleChange(change){
        this.db.handleChange(change);
    }

    


}
