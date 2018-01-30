var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    // $('.search');
    return this;
  },

  template: templateURL('src/templates/search.html')

});
