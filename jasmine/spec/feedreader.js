
$(function() {
  // Test suite named "RSS Feeds"
  describe('RSS Feeds', function() {
    /* Tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URL are defined and are not empty', function() {
      allFeeds.map((feeds) => {
        expect(feeds.url).toBeDefined();
        expect(feeds.url).not.toBe("");
      });
    });

    /* Test for each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('Names are defined and are not empty', function() {
      allFeeds.map((feeds) => {
        expect(feeds.name).toBeDefined();
        expect(feeds.name).not.toBe("");
      });
    });
  });


  // Test suite named "The menu" 
  describe('The menu', function() {

    /* Test that ensures the menu element is
     * hidden by default.
     */

    it('the menu is hidden by default', function() {
      expect(document.body).toHaveClass("menu-hidden");
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked.
     */

    it('menu visibility changes', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  // Test suite named "Initial Entries" 
  describe('Initial Entries', function() {
    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, done);
    })
    it('initial entries should be atleat one', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    })
  });


  // Test suite named "New Feed Selection" 
  describe('New Feed Selection', function() {
    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    var first;
    var second;
    beforeEach(function(done) {
      loadFeed(0, function() {
        first = $('.entry').html();

        loadFeed(1, function() {
          second = $('.entry').html();
          done();
        });
      });
    });
    it("initial and final entries are different", function() {
      expect(first).not.toBe(second);
    })
  });

}());
