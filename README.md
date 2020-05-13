# ionic-tabs-sidemenu
Ionic skeleton app with both tabs and sidemenu.

This app can:
* Hide or show the tab-bar for any of its  pages
* Include or omit any of its pages in the side menu, or in the tab-bar

Those things are done via the service [src/app/tab-bar.service.ts](src/app/tab-bar.service.ts).

In a nutshell: first create the Ionic App standard templates for both
the tabs app and a sidemenu app. This app is based on the tabs app
scaffold, but it takes the files `app.component.html`,
`app.component.ts` and `app.component.scss` from the sidemenu app,
then modifies `app.component.ts` and `tabs/tabs.page.ts` to put all
of the app's pages in `tabs/tabs.page.ts` instead.

## Main steps taken to reproduce this app

* Start a new **tabs** Ionic Angular project
  ```bash
  ionic start --type=angular
  ```
  For project name choose `ionic-tabs-sidemenu`. Choose a tabs
  project. Select the defaults from that point on.
* Create two more tab pages - tab4 and tab5 - based on tab1:
  ```bash
  cd ionic-tabs-sidemenu/src/app/
  cp -r tab1 tab4
  cp -r tab1 tab5

  cd tab4
  perl -pi -e 's/Tab1/Tab4/g' *
  perl -pi -e 's/tab1/tab4/g' *
  perl -pi -e 's/Tab 1/Tab 4/g' *
  mv tab1.module.ts tab4.module.ts
  mv tab1.page.html tab4.page.html
  mv tab1.page.scss tab4.page.scss
  mv tab1.page.spec.ts tab4.page.spec.ts
  mv tab1.page.ts tab4.page.ts
  mv tab1-routing.module.ts tab4-routing.module.ts

  cd ../tab5
  perl -pi -e 's/Tab1/Tab5/g' *
  perl -pi -e 's/tab1/tab5/g' *
  perl -pi -e 's/Tab 1/Tab 5/g' *
  mv tab1.module.ts tab5.module.ts
  mv tab1.page.html tab5.page.html
  mv tab1.page.scss tab5.page.scss
  mv tab1.page.spec.ts tab5.page.spec.ts
  mv tab1.page.ts tab5.page.ts
  mv tab1-routing.module.ts tab5-routing.module.ts
  ```
* Edit `src/app/tabs/tabs-routing.module.ts` - add a route for 
  tab4 & tab5 identical to the tab3 route, replacing '3' with '4'
  and '5', respectively.
  ```html
  ...
    <ion-tab-button tab="tab4">
      <ion-icon name="water"></ion-icon>
      <ion-label>Tab 4</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab5">
      <ion-icon name="heart"></ion-icon>
      <ion-label>Tab 5</ion-label>
    </ion-tab-button>
  ...
  ```
* Test the app to see that the 5-tabs app works
  ```bash
  npm start
  ```
* Copy over the following file modifications from their new
  versions in this repository overwriting the tabs app default
  versions:
  ```
  src/app/tab-bar.service.ts
  src/app/tabs/tabs.page.html
  src/app/tabs/tabs.page.ts
  src/app/app.component.html
  src/app/app.component.ts
  src/app/app.component.scss
* To test, you see that only `Tab 1` and `Tab 2` pages show up
  in the sidemenu. To go to any of the tabs pages either use
  `router.navigate(...)` in the code, or go to the url
  `src/app/tabs/tab3`, or `src/app/tabs/tab4` or
  `src/app/tabs/tab5` and you'll see the tabs pages.
* Play with the definitions in the the constant `TAB_PAGES` in
  `tabs/tabs.page.ts` to determine which page goes in the sidemenu,
  which goes in the tabs, and which can display the tab-bar.
