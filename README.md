# FEND-FeedReader
## I have done the following steps to complete the Project

### Cloning and Downloading the Project

-   After reading the Instructions, I have downloaded the skeleton project of Matching Game from a link of GitHub which is provided by **Udacity**.
-   Then I unzipped the skeleton project folder.
-   After that I thoroughly checked `index.html`, `style.css`, `app.js` files. I checked how the _allFeeds_ variable is written.
-   I checked the styles provided in css file.
-   I understood how the `Jasmine` framework works by referring the links given by _Udacity_.

### Running this app in PC.

-   Cloned this repository with git clone command by using the url which was given in project rubric.

-   Opened terminal and changed directory to my project folder.

-   Installed web-server for chrome ( 200 OK ) extension in the chrome browser.

-   Launched the installed extension. And also opened the project folder with that extension. I got a link from then and clicked on that to run the application.

-   We can run directly in browser but we can't check the accebility and performance of the application without server.

### Jasmine framework

-   I checked `feedreader.js` and understood what tests are to be performed.
-   I read the comments given in `feedreader.js` and I understood which test suites are to be written.
-   I learned how various functions and methods in _Jasmine Framework_ are used to conducted various tests.

### Test suites

-   Initially I wrote a test suite for checking the given test cases in `feedreader.js` file.
-   I checked whether _allFeeds_ contains any content in it or not by using _toBeDefined()_ and _not.toBe()_ pre-defined methods of _Jasmine_ framework.
-   Then I wrote the test case for the first given case i.e. _to ensure allFeeds has a URL defined and not to be Empty_ by using above mentioned methods and a loop to check every _URL_.
-   Then I wrote the test case for the second case  i.e. _to ensure allFeeds has a name defined and not to be Empty_ by using above mentioned methods.
-   I used a map function to conduct tests in _it_ part of the test suite.
-   From this two test cases we can confirm whether the _allFeeds_ variable has _URL_ and _name_ defined in it.
-   Second test suite is written for _menu performance named The menu_.
-   This suite is used to test that the menu is hidden by default and menu changes when menu-icon is clicked.
-   For this we need to know how the action is done. This can be checked in `style.css` and `index.html` files.
-   So I checked the files and understood how the menu-icon work.
-   For the menu to be hidden  by default, the `index.html` should have a element.
-   In _The menu_ test suite, first I wrote a test case to check the presence of any such element.
-   The test case is tested on _menu-hidden_ element in `index.html` which is used to give the hiding feature for menu.
-   Next I wrote a test case for testing the whether the menu visibility changes when menu icon is clicked.
-   We have _menu-icon-link_ class in `index.html` for changing the response of menu icon.
-   So I wrote a test case on _menu-icon-link_ such that for every click we test the response of menu.
-   Next test suite is written to check that _loadFeed()_ function is working properly i.e. initial entries are at least one.
-   A _beforeEach()_ function is used to test this case.
-   Since _loadFeed()_ is asynchronous we use _done()_.
-   Then I wrote a test case having condition as Initial entries are greater than 0.
-   The final test suite is to test that _feed content is changing every time we load it by loadFeed()_.
-   Since _loadFeed()_ is asynchronous I have used _done()_ function.
-   I have again used  _beforeEach()_ and _loadFeed()_ to load the feed and the entry is assigned  to a variable each time.
-   Testing is done by comparing both the variables.
