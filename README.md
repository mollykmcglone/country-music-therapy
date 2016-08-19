# Country-music-therapy

#### A web app to help people deal with life challenges through the power of country music.

#### By Molly McGlone, August 2016

## Description:

An Epicodus independent student project to practice building a modern Javascript app using the Ember JS framework.

Project Requirements:
* Create a question and answer message board where a user submits a question and other users can respond with answers.
* Questions should have the content of the question itself, an author and additional notes.
* Answers should have the content of the answer and the author.
* Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.
* List all questions on the homepage, with only the question and the name of the author showing.
* Users should be able to click on a question to view additional information.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/mollykmcglone/country-music-therapy.git`
* `cd country-music-therapy`
* `npm install`
* `bower install`
* `ember install ember-bootstrap`
* `ember install emberfire`

## Database

When you clone the app, it is connected to a database on my Firebase account.  In order to re-purpose this app you will need to connect your app to a different database on your own Firebase account.
* Visit https://firebase.google.com/ and set up a free account (if needed).
* Choose "Create New Project" on the Firebase dashboard and name your project's database with the same name as your app.
* From the Firebase console for your new project, click the "Add Firebase to your web app" button and copy the information that appears (apiKey, authoDomain, databaseURL, and storageBucket).
* Open your config/environment.js file and edit the following inside the ENV section, using the info you copied from Firebase on the appropriate lines:
```
firebase: {
       apiKey: 'YOUR-API-KEY-HERE', # REPLACE INFO HERE
  authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com', # REPLACE INFO HERE
  databaseURL: 'https://YOUR-FIREBASE-APP.firebaseio.com', # REPLACE INFO HERE
  storageBucket: 'YOUR-FIREBASE-APP.appspot.com', # REPLACE INFO HERE
},
```   

## Running / Development

* Start the project with `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Known Issues/Bugs

* Currently help requests can be tagged and users can view the help requests associated with each tag.  However, the many-to-many relationship between these models is not fully functional in that if a user adds a tag to a request in the app, a new tag object will be created that is completely independent of previous tag objects.  Duplicate tags can be created in this way, and it is not currently possible for users within the app to connect multiple help requests with the same tag object.

## Support and contact details

Please contact me with any questions, concerns, or ideas at mollykmcglone@gmail.com

## Technologies Used

* Ember JS
* npm
* Bower
* node.js
* HTML/CSS
* Bootstrap

### License

MIT License

Copyright (c) 2016  **Molly McGlone**
