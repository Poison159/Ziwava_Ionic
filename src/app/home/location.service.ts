import {Injectable} from '@angular/core';
import {ILocation} from './location';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LocationService {
    private _loactionUrl    = 'http://192.168.8.106:45457/api/Indawoes?userLocation=27.8627562,-26.2687509&distance=7';
    constructor(private _http: HttpClient){}
    getLocations(): Observable<ILocation[]> {
        console.log('getting indawo from the server');
        return this._http.get<ILocation[]>(this._loactionUrl);
    }
}