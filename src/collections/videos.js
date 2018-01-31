var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.search('hack reactor');
  },

  search: function(query) {
    this.fetch({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: $.extend({
        key: 'AIzaSyCZjYAHiCyd95PEhnKty730V0h7QsQ3grw',
        q: query,
        part: 'snippet'
      }, 
      {maxResults: 5, pageToken: $('#pageToken').val()}),

      contentType: 'application/json',
      success: function(data) {
      
        console.log('data recieved!');
      },
      error: function(data) {
        console.log('FAILED to load data!');
      }
    });
  }, 
  parse: function(response) {
    console.log(response);
    return response.items;
  }
});
