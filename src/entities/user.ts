import { PersonaFisica } from './persona-fisica'

export class User {
  constructor(
    public type: string,    //Tipo di dato (persona fisica)
    public user: string,    //nome di login utente
    public password: string, //password    
    public personaFisica: PersonaFisica //link to a true person
  ) { this.type="User";}
}
