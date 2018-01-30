var VideoListView = Backbone.View.extend({

  initialize: function() {
    console.log(this.collection);
  },
  
  render: function() {
    
    this.$el.children().detach();
    this.$el.html(this.template());
    // for (var i = 0; i < 5; i++) {
    //   // console.log(this.collection.models[i]);
      
    //   var video = new VideoListEntryView({model: Video});
    //   console.log(video);

    //   $('.video-list').append(
    //     new VideoListEntryView({model: Video}).el
    //   );
    // }
    this.collection.forEach(this.renderVideo, this);
    // return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    $('.video-list').append(videoView.render());
    // this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
