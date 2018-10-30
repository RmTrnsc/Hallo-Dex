import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapServiceService } from './map-service.service';
import { CandyListComponent } from './candy-list/candy-list.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    MainComponent,
    CandyListComponent,
    AcceuilComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: 'candylist', component: CandyListComponent, pathMatch:'full'},
        { path: 'formulaire', component: FormulaireComponent, pathMatch: 'full' },
        { path: 'acceuil', component: AcceuilComponent, pathMatch: 'full'},
        { path: '', redirectTo: 'acceuil', pathMatch: 'full'}
      ],
      {useHash: true}
    )
  ],
  providers: [MapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
