import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdressService } from './adress.service'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapServiceService } from './map-service.service';
import { CandyListComponent } from './candy-list/candy-list.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CandyMapComponent } from './candy-map/candy-map.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    MainComponent,
    CandyListComponent,
    AcceuilComponent,
    CandyMapComponent,
    RecapitulatifComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'candylist', component: CandyListComponent, pathMatch:'full'},
        { path: 'formulaire', component: FormulaireComponent, pathMatch: 'full' },
        { path: 'candymap', component: CandyMapComponent, pathMatch: 'full'},
        { path: 'recapitulatif', component: RecapitulatifComponent, pathMatch: 'full'},
        { path: 'acceuil', component: AcceuilComponent, pathMatch: 'full'},
        { path: '', redirectTo: 'acceuil', pathMatch: 'full'}
      ],
      {useHash: true}
    )
  ],
  providers: [MapServiceService,AdressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
