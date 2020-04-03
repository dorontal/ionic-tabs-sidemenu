import { Component } from '@angular/core';

const TAB_PAGES: any[] = [
    {
        title: 'Tab 1',
        tab: 'tab1',
        icon: 'search',
        inSidemenu: true,
        inTabbar: false,
        showTabbar: false
    },
    {
        title: 'Tab 2',
        tab: 'tab2',
        icon: 'information-circle',
        inSidemenu: true,
        inTabbar: false,
        showTabbar: false
    },
    {
        title: 'Tab 3',
        tab: 'tab3',
        icon: 'triangle',
        inSidemenu: false,
        inTabbar: true,
        showTabbar: true
    },
    {
        title: 'Tab 4',
        tab: 'tab4',
        icon: 'square',
        inSidemenu: false,
        inTabbar: true,
        showTabbar: true
    },
    {
        title: 'Tab 5',
        tab: 'tab5',
        icon: 'ellipse',
        inSidemenu: false,
        inTabbar: true,
        showTabbar: true
    }
];
export const TABS_ROOT: string = 'app';
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
    public readonly tabPages: any = TAB_PAGES.filter(page => page.inTabbar);
}
