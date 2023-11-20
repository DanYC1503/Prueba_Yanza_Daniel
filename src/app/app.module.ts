import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { CrearComponent } from './pages/crear/crear.component';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environments } from 'src/environment/environments';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { DeleteComponent } from './pages/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearComponent,
    ListarComponent,
    EditarComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environments.firebaseConfig )),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environments.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
