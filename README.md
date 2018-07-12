feed reader testing
===============================

## Table of Contents

* [project Details](#project_details)
* [Instructions](#instruction)
* [js/app.js](#js/app.js)
* [Functions](#functions)
* [spec/feedreader.js](#spec/feedreader.js)

## project Details

Testing the functionality for a feed reader using Jasmine frame work

## instructions
To start the app you need to open index.html

## js/app.js

Has the main functionality,

## Functions
function loadFeed(index, cb) :
 This function performs everything necessary to load a feed using the Google Feed Reader API. It will thenperform all of the DOM operations required to display feed entries on the page. Feeds are referenced by their index position within the allFeeds array. This function all supports a callback as the second parameter which will be called after everything has run successfully.

## spec/feedreader.js

 This is the spec file that Jasmine will read and contains all of the tests that will be run against your application.
 
 We're placing all of our tests within the $() function, since some of these tests may require DOM elements. We want to ensure they don't run until the DOM is ready.



