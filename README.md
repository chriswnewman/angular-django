# NG Django
Proof of concept project that demonstrates using Angular and Django together.
Django will serve a custom Angular app as well as provide APIs to it's SQLite Database.
Based on [this post by Liran B.H](https://devarea.com/building-a-web-app-with-angular-django-and-django-rest/#.XQqP3xNKiL_)

## Project Overview
#### Frontend
Generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.
For more information, see [frontend/README.md](./frontend/README.md)

#### Backend
Generated with Python and Django per instructions in the aforementioned post

## Setup
cd into frontend and run ```npm install```.

Run `npm run build` to build the project. As part of this build step, the Angular app artifact will be placed in the backend project at `dist/` directory, and be served by Django
