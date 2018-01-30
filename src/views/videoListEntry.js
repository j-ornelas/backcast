var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .media-object': 'handleClick',
    'click .video-list-entry-title': 'handleClick'
  },

  initialize: function(data) {
    // this.render();
    // console.log(this.model);
    // $('.video-list-entry-title').on('click', this.model.select);
    // this.model.on('click', this.model.select();
    
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  handleClick: function() {
    this.model.select();
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
