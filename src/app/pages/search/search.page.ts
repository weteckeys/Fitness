import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];

  story = [
    'assets/imgs/t1.jpg',
    'assets/imgs/t2.jpg',
    'assets/imgs/t3.jpg',
    'assets/imgs/t4.jpg',
    'assets/imgs/t5.jpg',
    'assets/imgs/t6.jpg',
    'assets/imgs/t7.jpg',
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.initMap();
  }

  goToTrainer() {
    this.router.navigate(['/tabs/trainer-profile']);
  }

  initMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: 4.658383846282959, lng: -74.09394073486328 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
