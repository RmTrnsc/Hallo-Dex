import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapServiceService } from './map-service.service';
import { CandyListComponent } from './candy-list/candy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CandyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          "path": "candylist",
          "component": CandyListComponent,
          pathMatch:'full'
        },
      ],
      {
        "useHash": true
      }
    )
  ],
  providers: [MapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
