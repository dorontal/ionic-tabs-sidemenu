# ionic-tabs-sidemenu

**Page-by-page-configurable way of using sidemenu
and tabs simultaneously**

Ionic skeleton app with both tabs and sidemenu.

This app is only a simplified example, meant to showcase the code.

The code is here for developers to use to accomplish the features
demonstrated by the app.

#### Demo walkthrough
To go through the demo
* Run `yarn install` from the shell to install packages
* Run `yarn start` from the shell to start a local server
* Go to `localhost:4200` in your browser

You can see all features of the code demonstrated by the app if you go through
the tabs in the order 1 to 5.

This app can:
* Hide or show the tab-bar for any of its  pages
* Include or omit any of its pages in the side menu, or in the tab-bar

This app allows you to easily control the following in your programs, via one constant definition (see`TAB_PAGES` in [src/app/tabs/tabs.page.ts](src/app/tabs/tabs.page.ts):
  1) Whether any page should appear in the tab-bar
  2) Whether any page should appear in the side menu
  3) Which page should show the tab-bar (you can turn it off for some pages)

Those are implemented via a service [src/app/tab-bar.service.ts](src/app/tab-bar.service.ts).

## Main steps taken to reproduce this app

Of course you do not need to recreate this app from scratch. All you
need to do is clone this repository and you can use the code. The 
instructions below are only here for illustration / educational
purposes, if anyone wants to gain a better understanding of the changes
that were made to the standard scaffolded app that resulted in creating 
this one.

To recreate this from scratch, in a nutshell: first create the Ionic
App standard templates for both the tabs app and a sidemenu app. This
app is based on the tabs app scaffold, but it takes the files
`app.component.html`, `app.component.ts` and `app.component.scss` from
the sidemenu app, then modifies `app.component.ts` and
`tabs/tabs.page.ts` to put all of the app's pages in
`tabs/tabs.page.ts` instead.

* Start a new **tabs** Ionic Angular project
  ```bash
  ionic start ionic-tabs-sidemenu tabs --type=angular
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
  mv tab1.page.html tab5p.age.html
  mv tab1.page.scss tab5.page.scss
  mv tab1.page.spec.ts tab5.page.spec.ts
  mv tab1.page.ts tab5.page.ts
  mv tab1-routing.module.ts tab5-routing.module.ts
  ```
* Edit `src/app/tabs/tabs-routing.module.ts` - add a route for 
  tab4 & tab5 identical to the tab3 route, replacing '3' with '4'
  and '5', respectively.
* Test that the app compiles at this stage, it should.
  ```bash
  yarn start
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
  src/app/tab1/tab1.page.html 
  src/app/tab2/tab2.page.html 
  src/app/tab3/tab3.page.html 
  src/app/tab4/tab4.page.html 
  src/app/tab5/tab5.page.html 
* Run the app. To test functionality, check that only `Tab 1` and `Tab
  2` pages show up in the sidemenu. To go to any of the tabs pages
  either use `router.navigate(...)` in the code, or go to the url
  `src/app/tabs/tab3`, or `src/app/tabs/tab4` or `src/app/tabs/tab5`
  and you'll see the tabs pages.
* Play with the definitions in the the constant `TAB_PAGES` in
  [src/app/tabs/tabs.page.ts](src/app/tabs/tabs.page.ts) to determine
  which page goes in the sidemenu, which one goes in the tabs, and which
  page displays the tab-bar.
