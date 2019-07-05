import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { LocationService } from './home/location.service';
import { TeamsPage } from './teams/teams.page';
import { TournamentsPage } from './tournaments/tournaments.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsPage } from './results/results.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [ 
    FormsModule,
    MbscModule, 
    FormsModule,
    MbscModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    LocationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
