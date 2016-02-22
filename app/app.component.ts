import {Component, ViewChild} from 'angular2/core';
import {GoogleMapWebComponent} from './googlemap.component'

@Component({
    selector: 'root',
    directives: [GoogleMapWebComponent],
    template: `
<div>Angular2 with Google Map Web Component</div>
<button (click)="goWest()">Go West</button>
<button (click)="print()">print</button>
<style>
  google-map {
    height: 600px;
  }
</style>
<google-map [latitude]="lat" [longitude]="lng"></google-map>`
})
export class AppComponent {
    @ViewChild(GoogleMapWebComponent)
    googlemap: GoogleMapWebComponent;

    constructor() {
        this.lat = 35.71;
        this.lng = 139.98;
    }

    goWest() {
        this.lng = this.lng - 0.1; // Angular 側のプロパティ更新が Web Components に反映される
    }

    print() {
        console.log('[Angular2 Component Property] Lat: ', this.lat, ' Lng: ', this.lng);
        this.googlemap.printLatLng(); // 子コンポーネントのメソッド呼び出し
    }
}
