import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { config } from './config'
import { FirebaseAppModule, initializeApp, provideFirebaseApp } 
                                        from '@angular/fire/app'
import {FirestoreModule} from '@angular/fire/firestore'
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:
   [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    FirestoreModule,
    EmployeeService
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
