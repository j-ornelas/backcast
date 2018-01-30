var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // var mainVideo = this.videos.at(0).attributes;
    // console.log(this.videos);
    // this.videos.search();
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());
    // this.$el.html(this.template(this.videoList));
 
    var searchBar = new SearchView({
      collection: this.videos
    });

    var videoList = new VideoListView({ el: '.list',
      collection: this.videos
    });

    var videoPlayer = new VideoPlayerView({ el: '.player',
      collection: this.videos,
      model: this.videos.at(0).attributes
      // mainVideo: this.videos.at(0).attributes
    });

    
    videoList.render();
    searchBar.render();
    videoPlayer.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
