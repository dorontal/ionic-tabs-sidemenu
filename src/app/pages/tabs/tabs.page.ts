import { Component } from '@angular/core';

const TAB_PAGES: any[] = [
    {
        title: 'Tab 1',
        tab: 'tab1',
        icon: 'search',
        showInSidemenu: true,
        showInTabbar: false
    },
    {
        title: 'Tab 2',
        tab: 'tab2',
        icon: 'information-circle',
        showInSidemenu: true,
        showInTabbar: false
    },
    {
        title: 'Tab 3',
        tab: 'tab3',
        icon: 'triangle',
        showInSidemenu: false,
        showInTabbar: true
    },
    {
        title: 'Tab 4',
        tab: 'tab4',
        icon: 'square',
        showInSidemenu: false,
        showInTabbar: true
    },
    {
        title: 'Tab 5',
        tab: 'tab5',
        icon: 'ellipse',
        showInSidemenu: false,
        showInTabbar: true
    }
];
export const TABS_ROOT: string = 'app';
export const APP_PAGES: any[] = TAB_PAGES.map((page: any) => {
    return {
        title: page.title,
        icon: page.icon,
        url: '/' + TABS_ROOT + '/' + page.tab
    };
});

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public readonly tabPages: any = TAB_PAGES;
}
