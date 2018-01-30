var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    // listening to the event 'select'
    console.log(this.collection);
    this.collection.on('select', this.checkSelection, this);
  },

  checkSelection: function(selection) {
    console.log(selection);
    this.render(selection.attributes);
  },

  render: function(video) {
    if (video === undefined) {
      video = this.collection.at(0).attributes;
    }
 
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(video));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


