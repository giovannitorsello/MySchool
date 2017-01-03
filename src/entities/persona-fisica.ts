/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export class PersonaFisica {
  constructor(
    public type: string,    //Tipo di dato (persona fisica)
    public role: string,    //Ruolo nella logica del software (es. studente, genitore ecc.)
    public nome: string,    //Nome della persona
    public cognome: string, //Cognome della persona
    public codfis: string,  //Codice fiscale o partita IVA
    public domicilio: string,    //domicilio della persona (via, centro abitato, comune, provincia, regione, stato)
    public residenza: string,    //residenza della persona (via, centro abitato, comune, provincia, regione, stato)
    public email: string,        //email
    public telefono: string,      //telefono
    public mobile: string,      //telefono
    public contatti: any        //contatti importati genitori, tutori ecc.
    
  ) { this.type="PersonaFisica"; this.role="Studente"; }
}


