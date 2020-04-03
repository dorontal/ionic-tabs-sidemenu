import { ElementRef, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TabbarService {
    ref: ElementRef;

    constructor() { }

    setElementRef(ref: ElementRef) {
        console.log('setting ', ref);
        this.ref = ref;
    }

    hide() {
        console.log('hiding', this.ref.nativeElement);
        console.log('hiding', this.ref);
        this.ref.nativeElement.style.display = 'none';
    }

}
