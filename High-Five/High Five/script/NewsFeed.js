function showGadget() {
      var feeds = [
       {title:'Cleveland Entertainment',
        url:'http://blog.cleveland.com/ent_impact/atom.xml'},
       {title:'Cleveland Sports Blogs',
        url:'http://blog.cleveland.com/cavs_impact/atom.xml'},
       {title:'Local Communities',
        url:'http://impact.cleveland.com/cleveland-heights/atom.xml'}];

      new GFdynamicFeedControl(feeds, 'feedGadget',
                               {numResults : 4, stacked : true,
                               title: "High Five News"});
    }
    google.load("feeds", "1");
    google.setOnLoadCallback(showGadget);
