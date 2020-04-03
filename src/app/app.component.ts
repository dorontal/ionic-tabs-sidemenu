import { Component } from '@angular/core';

import { APP_PAGES } from './pages/tabs/tabs.page';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages: any[] = APP_PAGES.filter(page => page.inSidemenu);
}
