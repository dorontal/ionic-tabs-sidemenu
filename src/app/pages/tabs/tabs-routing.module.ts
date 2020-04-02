import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TABS_ROOT, TabsPage } from './tabs.page';

const ROUTES: Routes = [
    {
        path: TABS_ROOT,
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab1/tab1.module')
                            .then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab2/tab2.module')
                            .then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab3/tab3.module')
                            .then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab4/tab4.module')
                            .then(m => m.Tab4PageModule)
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab5/tab5.module')
                            .then(m => m.Tab5PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/' + TABS_ROOT + '/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/' + TABS_ROOT + '/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
