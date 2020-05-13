import { Component, ElementRef, ViewChild } from '@angular/core';

import { TabBarService } from  '../tab-bar.service';

const TAB_PAGES: any[] = [
    {
        title: 'Tab 1',
        tab: 'tab1',
        icon: 'search',
        inSidemenu: true,
        inTabBar: false,
        showTabBar: false
    },
    {
        title: 'Tab 2',
        tab: 'tab2',
        icon: 'information-circle',
        inSidemenu: true,
        inTabBar: false,
        showTabBar: true
    },
    {
        title: 'Tab 3',
        tab: 'tab3',
        icon: 'triangle',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    },
    {
        title: 'Tab 4',
        tab: 'tab4',
        icon: 'square',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: true
    },
    {
        title: 'Tab 5',
        tab: 'tab5',
        icon: 'ellipse',
        inSidemenu: false,
        inTabBar: true,
        showTabBar: false
    }
];

/*
 * TABS_ROOT is the root path of all pages, e.g, if you set this
 * to 'app' then all pages start with the path 'app' as in:
 * http://localhost:8100/app/tab1.
 */
export const TABS_ROOT: string = 'tabs';
export const APP_PAGES: any[] = TAB_PAGES.map((page: any) => {
    page.url = '/' + TABS_ROOT + '/' + page.tab;
    return page;
});

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public readonly tabBarPages: any =
        TAB_PAGES.filter((page: any) => page.inTabBar);
    
    @ViewChild('tabBar', {read: ElementRef, static: false})
    private tabBarRef: ElementRef;

    constructor(private tabBarService: TabBarService) {}

    public ngAfterViewInit(): void {
        const pagesShowingTabBar: Set<string> = new Set<string>(
            TAB_PAGES.filter((page: any) => page.showTabBar)
                .map((page: any) => page.tab));
        this.tabBarService.init(this.tabBarRef, pagesShowingTabBar);
    }
}
