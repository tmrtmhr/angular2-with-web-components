import {Directive, ElementRef} from 'angular2/core';

@Directive({
    selector: 'google-map',
})
export class GoogleMapWebComponent {
    // @Input() latitude などはつけない
    elem: any;

    constructor(elRef:ElementRef) {
        this.elem = elRef.nativeElement;
    }

    printLatLng() {
        console.log('[DOM Property] Lat: ', this.elem.latitude, ' Lng: ', this.elem.longitude);
    }
}
