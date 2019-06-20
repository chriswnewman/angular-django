# NG Django
Proof of concept project that demonstrates using Angular and Django together.
Based on [this post by Liran B.H](https://devarea.com/building-a-web-app-with-angular-django-and-django-rest/#.XQqP3xNKiL_)

**Versions used**

Angular 8

Django 2

Python 3

Node 10

NPM 6

## Project Overview
Django runs on ```localhost:8000``` and can serve the Angular app on ```localhost:8000/```
Django has a few api endpoints at ```localhost:8000/api```
- GET```localhost:8000/api/getcust```
- POST```localhost:8000/api/test```

#### Frontend
Generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.
Runs on ```localhost:4200``` by default when started with the Angular CLI (```ng serve```);
 - A proxy configuration is in place which allows the Angular app to hit the Django API endpoints when it's run this way. 
 
For more information, see [frontend/README.md](./frontend/README.md)

#### Backend
Generated with Python and Django per instructions in the aforementioned post.
Adapted slightly to (hopefully) make more sense.
(I barely know python so I'm sure there are some linting errors)

## Install dependencies && migrations
**Frontend**: Make sure you have Node and NPM installed. 
 - install the Angular CLI: ```npm install -g @angular/cli```
 - cd into frontend and and install dependencies by running ```npm install```

**Backend**: the following packages were mentioned in the article above and should be installed with pip:
 - cd into backend apply migrations with ```python manage.py migrate```
```
django
gunicorn
psycopg2-binary
djangorestframework
```
the following packages were mentioned in the article, but should not be necessary:
```
dj-database-url
whitenoise
```


## Run
After installing dependencies and applying migrations:
If you want to have Django serve the Angular app, cd into front end and run `npm run build:prod`. This builds the frontend app and copies the bundled files into `backend/data/static`.

Run the Django app with `python manage.py runserver`.

Optional: While the Django app is running on localhost:8000, the Angular app could also be run separately on another port (cd into frontend and `ng serve`) and still hit the Django API endpoints.

## Notes
The current ```build:prod``` package.json script isn't perfect. The `index.html` being served by Django is located at `backend/templates`. So if you added lazy-loaded modules to the front end app (which would result in additional bundle.js files), you would need to manually update the index.html in `backend/templates` to reference those. 

To automate this, you would need to have some additional node script run, which updates all `<script>` and `<link>` tags in `frontend/dist/frontend/index.html` to use `<%  %>` syntax, and copies that dist index.html into `backend/templates`.
