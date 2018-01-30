var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    console.log(this.videos);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
 
    var searchBar = new SearchView({
      collection: this.videos
    });

    var videoList = new VideoListView({ el: '.list',
      collection: this.videos
    });

    var videoPlayer = new VideoPlayerView({ el: '.player',
      collection: this.videos
      
    });


    videoList.render();
    searchBar.render();
    videoPlayer.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
