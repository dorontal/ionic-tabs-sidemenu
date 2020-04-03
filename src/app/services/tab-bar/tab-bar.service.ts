import { filter } from 'rxjs/operators';
import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Platform } from '@ionic/angular';

// Adapted from https://medium.com/@JordanBenge/..
//   ..ionic-4-hiding-showing-tabs-on-certain-pages-31cf2380a5db

@Injectable({
    providedIn: 'root'
})
export class TabBarService {
    private tabBarRef: ElementRef;

    constructor(
        private router: Router,
        private platform: Platform
    ) {
        this.platform.ready().then(() => {
            // subscription to catch the page we're navigating to
            this.router.events.pipe(
                filter((event: RouterEvent) => event instanceof NavigationEnd)
            ).subscribe((event: RouterEvent) => {
                this.setTabVisibility(event);
            });
        });
    }

    public init(tabBarRef: ElementRef): void {
        console.log('setting ', tabBarRef);
        this.tabBarRef = tabBarRef;
    }

    public hide(): void {
        const display: string = this.tabBarRef.nativeElement.style.display;
        if (display != 'none') {
            this.tabBarRef.nativeElement.style.display = 'none';
        }
    }

    public show(): void {
        const display: string =
            this.tabBarRef.nativeElement.style.display;
        if (display != 'flex') {
            this.tabBarRef.nativeElement.style.display = 'flex';
        }
    }

    private setTabVisibility(event: RouterEvent) {
        const lastUrlPart: string = /.*\/([^?]+)/.exec(event.url);


    }

}
