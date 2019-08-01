import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { AlertButtonComponent } from './alert-button.component';
import { MessageService } from 'src/app/message.service';

describe('AlertButtonComponent', () => {
  // component à tester
  let component: AlertButtonComponent;
  // fixture = environnement de test pour ce component
  let fixture: ComponentFixture<AlertButtonComponent>;
  // ...
  let de: DebugElement;
  // retourne l'observable dans la même forme que dans firebase
  let serviceStub: any;

  beforeEach(async(() => {

    serviceStub = {
      getContent: () => of('You have been warned'),
    };

    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ],
      providers: [ { provide: MessageService, useValue: serviceStub } ]
    })
    // compile le HTML et le CSS
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    // teste le component directement
    component = fixture.componentInstance;
    // teste le rendu HTML du component via l'élément debug
    de = fixture.debugElement;
    // detection de changement
    fixture.detectChanges();
  });

  // teste si le component est créé
  it('should create', () => {
    // toBeTruthy() évalue à 'true' dans un contexte booleen
    expect(component).toBeTruthy();
  });

  // vérifie que le message contient le mot 'warn'
  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  // severity doit être supérieur à 2
  it('should have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  // teste le DOM, en utilisant l'élément Debug
  it('should have a H1 tag of `Alert button`', () => {
    // recupère l'élément HTML (la string à l'intérieure du h1),
    // puis valide qu'elle est égale à 'Alert button'
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert button');
  });

  it('should toogle the message boolean', () => {
    // vérifie que hiddencontent est vrai ()
    expect(component.hiddencontent).toBeTruthy();
    // exécute la fonction toogle() (hiddencontent devient vrai)
    component.toogle();
    // permet de vérifier que la méthode fait bien ce qu'on lui demande
    expect(component.hiddencontent).toBeFalsy();
  });

  // en async
  it('should toogle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hiddencontent).toBeTruthy();
    // exécute la fonction toogleAsync() (hiddencontent devient vrai après 500 ms)
    component.toogleAsync();
    // attend 501 ms avant de continuer
    tick(501);
    expect(component.hiddencontent).toBeFalsy();
  }));

  // vérifie que l'on récupère un contenu, égal à 'You have been warned'
  it('should have message content defined from an observable', () => {
    component.content$.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe('You have been warned');
    });
  });

  <reprendre à 9:35>

});
