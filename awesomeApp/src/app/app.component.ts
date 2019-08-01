import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {
    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: ' AIzaSyCKDWK-6U3Bjm88_gle9xiE-get5Sns5fk ',
    authDomain: 'test-bde5c.firebaseio.com',
    databaseURL: 'https://test-bde5c.firebaseio.com/',
    projectId: 'test-bde5c',
    storageBucket: 'gs://test-bde5c.appspot.com',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
