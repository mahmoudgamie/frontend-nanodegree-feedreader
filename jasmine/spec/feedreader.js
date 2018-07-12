/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // ensures allFeeds has a url
        it('has a url', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        // ensures allFeeds has a name
        it('has a name', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        })
    });

    describe('The menu', function () {
        var body, menuIcon;
        beforeEach(function () {
            body = $('body');
            menuIcon = $('.menu-icon-link');
        });
        // insures menu is hidden by default
        it('should be hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        })

        //test the toggle menu functionality
        it('should open/close on click', function () {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        })

    })

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        
        //insures that at least one entry is loaded
        it('has a single entry in feed container', function (done) {
            expect($('.feed .entry-link').length).toBeGreaterThan(0);
            done();
        });
    })

    describe('New Feed Selection', function () {
        var oldFeedList;
        var newFeedList;

        //ensures content changes when a new feed is loaded
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeedList = $('.feed').html();
                loadFeed(1, function () {
                    newFeedList = $('.feed').html();
                    done();
                });

            });
        });

        it('content should change when a new feed is loaded', function (done) {
            expect(oldFeedList).not.toEqual(newFeedList);
            done();
        });
    })

}());
