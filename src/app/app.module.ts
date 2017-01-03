import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//App
import { MyApp } from './app.component';

//Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AnagraficaPersonaFisicaPage } from '../pages/anagrafica-persona-fisica/anagrafica-persona-fisica';
import { RicerchePersonaFisicaPage } from '../pages/ricerche-persona-fisica/ricerche-persona-fisica';


//providers
import { AuthProvider } from '../providers/auth-provider';
import { CouchDB } from '../providers/couch-db';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RicerchePersonaFisicaPage,
    AnagraficaPersonaFisicaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RicerchePersonaFisicaPage,
    AnagraficaPersonaFisicaPage
  ],
  providers: [CouchDB, AuthProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
