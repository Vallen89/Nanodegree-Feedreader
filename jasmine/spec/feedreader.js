/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         /*Loop through  allFeeds*/
function loop(feed) {
         it('Feed URL defined', function() {
           expect(feed.url).toBeDefined(); //Is the URL defined
           expect(feed.url.length).toBeGreaterThan(0); //URL not empty
         });
}      //Loop through the 4 Feeds
         for (var x=0; x <= 3; x++) {
           loop(allFeeds[x]);
         }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //Loop through the Names of the Feeds
         function names(feed) {
                  it('Feedname defined', function() {
                    expect(feed.name).toBeDefined(); //Is the Name defined
                    expect(feed.name.length).toBeGreaterThan(0); //Name not empty
                  });
         }      //Loop through the 4 Feeds
                  for (var y=0; y <= 3; y++) {
                    names(allFeeds[y]);
                  }
    });


    /* TODO: Write a new test suite named "The menu" */
describe('The menu', function() {
        var body = $("body");
        var btn = $("a.menu-icon-link");
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //Checks if the class "menu-midden" is active
         it('menu hidden', function() {
         expect(body.hasClass("menu-hidden")).toBe(true);
       });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //When the Menu Link is clicked the Sidebar should toggle
          it("visibility change when clicked", function() {
            btn.click();
            expect(body.hasClass("menu-hidden")).toBe(false);
            btn.click();
            expect(body.hasClass("menu-hidden")).toBe(true);
          });
});
    /* TODO: Write a new test suite named "Initial Entries" */
describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         //checks if the LoadFeed Function has finished loading the feeds
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });
         //Checks if the Feed Container is not empty
         it("Feed-Container not empty", function() {
           var feed = $(".feed .entry");
           expect(feed.length).toBeGreaterThan(0);
         });
});
    /* TODO: Write a new test suite named "New Feed Selection" */
describe('New Feed Selection', function() {
  var firstLoad, secondLoad;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         /*Saves the Text of the first and second Feed in two Variables after
         the loadFeed function finished loading*/
         beforeEach(function(done) {
           loadFeed(0, function() {
             firstLoad = $(".entry").text();
             loadFeed(1, function() {
              secondLoad = $(".entry").text();
               done();
             });
           });
         });
         //Compares the two Variables to make sure they are not identical
         it("New Content is loaded", function() {
           expect(firstLoad).not.toEqual(secondLoad);
         });
});
}());
