function showGadget() {
      var feeds = [
       {title:'CNN Top Stories',
        url:'http://rss.cnn.com/rss/cnn_topstories.rss'},
       {title:'E-Online',
        url:'http://www.eonline.com/syndication/feeds/rssfeeds/topstories.xml'},
       {title:'TMZ',
        url:'http://www.tmz.com/rss.xml'}];

      new GFdynamicFeedControl(feeds, 'feedGadget',
                               {numResults : 3, stacked : true,
                               title: "High Five News"});
    }
    google.load("feeds", "1");
    google.setOnLoadCallback(showGadget);