import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  { path: 'formulaire', component: FormulaireComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
