import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';


/* Generated class for the CouchDB provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class CouchDB {

  
    db: any;
    data: any;
    remote: any;    
    
    constructor() {}

    open(login: string, password: string, database: string, host: string, port: string) {
 
        this.db = new PouchDB(database);
        this.remote = 'http://'+login+':'+password+'@'+host+':'+port+'/'+database;
        console.log("Using connection string");
        console.log(this.remote);
        let options = {
            live: true,
            retry: true,
            continuous: true
        };

        this.db.sync(this.remote, options)
        .on('error', function (err) {
            console.log("Error in connection database"); return;            
        })
        .on('complete', function (info) {
            console.log("Connection db successfull");        
            console.log(this.db);
        });
        
   }
 
   create(p) {
        this.db.post(p);
        console.log("saved new");
   }

   update(p) {
        this.db.put(p).catch((err) => {
        console.log(err);
        });
        console.log("updated");
   }

   delete(p) {
        this.db.remove(p).catch((err) => {
        console.log(err);
        });
    }


    search (view, key_search)
    {
        if(key_search==="")
        {
            this.data=[];
            return Promise.resolve(this.data);
        }

        var data = [];
        var prom=new Promise(resolve => {
                this.db.query(view, {
                    startkey    : key_search,
                    endkey      : key_search+'\uffff',
                    group: true,
                    group_level: 1,
                    include_docs : true
                }).then(function (result) {
                    let docs = result.rows.map((row) => {
                        data.push(row.doc);
                    });
                    resolve(data);                    
                }).catch(function (error) {
                    console.log("Query error: "+ error);                    
                });
        });

        this.data=data;
        return prom;       
    }


   getAll() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
 
        return new Promise(resolve => {
                this.db.allDocs({include_docs: true
                }).then((result) => {
                    this.data = [];
                    let docs = result.rows.map((row) => {
                        this.data.push(row.doc);
                    });
                    resolve(this.data);
                    
                    this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
                        this.handleChange(change);
                    });
                }).catch((error) => {
                    console.log(error);
                }); 
        });
    }

    handleChange(change){
        let changedDoc = 0;
        let changedIndex = 0;
        this.data.forEach((doc, index) => {
            if(doc._id === change.id){changedDoc = doc;changedIndex = index;}
        });

        //A document was deleted        
        if(change.deleted){this.data.splice(changedIndex, 1);} 
        else {
            //A document was updated
            if(changedDoc){this.data[changedIndex] = change.doc;} 

            //A document was added
            else {this.data.push(change.doc);}
        }
    }

    info()
    {
        this.db.info().then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });
    }
    

}
