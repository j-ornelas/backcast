var VideoListEntryView = Backbone.View.extend({

  initialize: function(data) {
    // this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));



    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
