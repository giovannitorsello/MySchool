import { PersonaFisica } from './persona-fisica'

export class Studente extends PersonaFisica {
  constructor(    
    public corso_studi: string,
    public classe: string,    
    public sezione: string,    
    public data_prima_iscrizione: string,
    public tagnumber: string   
  ) { super("persona_fisica","studente","","","","","","","","","");}
}