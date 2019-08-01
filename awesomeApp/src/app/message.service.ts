import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private db: AngularFirestore
  ) { }

  // récupère le contenu de la base sous forme d'observable
  getContent(): Observable<any> {
    const ref = this.db.collection('testAlert');
    return ref.valueChanges();
  }

}
