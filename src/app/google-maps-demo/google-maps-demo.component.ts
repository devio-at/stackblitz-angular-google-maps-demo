import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
})
export class GoogleMapsDemoComponent {
  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.gmapApiKey}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
