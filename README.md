# Ionic and Flask

This for educational resonses for CFP instructors.

This repo has the needed code to demostrate a final example of how to make an ionic client app communicates with a flask server app.

  - Server - using flask this will be taught in the summer Y3
  - Client - using ionic framework this both in YL2 and summer Y3

## Contents
In this repo you will find 2 main folders
### Server
```bash
│   run.py - main to run file
│
├───database
│   │   connect.py - connection file
│   │   post.py - all DB functions related to post
│   │   user.py - all DB functions related to user
│
└───entities
    │   post.py - Post Class
    │   user.py - User Class
```

### Client

```bash
CFP
└───src
     │   global.scss
     │   index.html
     │   karma.conf.js
     │   main.ts
     │   polyfills.ts
     │   test.ts
     │   tsconfig.app.json
     │   tsconfig.spec.json
     │
     ├───app
     │   │   app-routing.module.ts
     │   │   app.component.html
     │   │   app.component.spec.ts
     │   │   app.component.ts
     │   │   app.module.ts
     │   │   weather.service.spec.ts
     │   │   weather.service.ts
     │   │
     │   ├───settings
     │   │       settings.module.ts
     │   │       settings.page.html
     │   │       settings.page.scss
     │   │       settings.page.spec.ts
     │   │       settings.page.ts
     │   │
     │   ├───tab1
     │   │       tab1.module.ts
     │   │       tab1.page.html
     │   │       tab1.page.scss
     │   │       tab1.page.spec.ts
     │   │       tab1.page.ts
     │   │
     │   ├───tab2
     │   │       tab2.module.ts
     │   │       tab2.page.html
     │   │       tab2.page.scss
     │   │       tab2.page.spec.ts
     │   │       tab2.page.ts
     │   │
     │   ├───tab3
     │   │       tab3.module.ts
     │   │       tab3.page.html
     │   │       tab3.page.scss
     │   │       tab3.page.spec.ts
     │   │       tab3.page.ts
     │   │
     │   └───tabs
     │           tabs.module.ts
     │           tabs.page.html
     │           tabs.page.scss
     │           tabs.page.spec.ts
     │           tabs.page.ts
     │           tabs.router.module.ts
     │
     ├───assets
     │   │   shapes.svg
     │   │
     │   └───icon
     │           favicon.png
     │
     ├───environments
     │       environment.prod.ts
     │       environment.ts
     │
     └───theme
        variables.scss
```
