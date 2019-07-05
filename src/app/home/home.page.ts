import { LocationService } from './location.service';
import { ILocation } from './location';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    private name:        string = 'Ziwava';
    private locations:   ILocation[];
    slideOpts = {
      initialSlide: 1,
      speed: 400
    };

  constructor(private location: LocationService, private nav: NavController) {}

  ngOnInit(){
    
    console.log('Fetching from service');
    this.location.getLocations().subscribe(
        (data: ILocation[]) => this.locations = data,
        (err: any) => console.log(err),
        () => console.log('All done getting locations')
    );
  }

  goToTournaments(){
    this.nav.navigateForward('/tournaments');
  }
}
