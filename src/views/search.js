var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'click button': 'handleClick',
    'keypress': 'dynamicSearch'
  },

  initialize: function() {
    console.log(this.collection);
  },
  render: function() {
    this.$el.html(this.template());
    // $('.search');

    
    return this;
  },
  handleClick: function() {
    this.collection.search($('input').val());
    this.render();
  },
  dynamicSearch: function() {
    this.collection.search($('input').val());
  },

  template: templateURL('src/templates/search.html')

});
