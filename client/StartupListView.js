var StartupListView = Backbone.View.extend({
  tagName: 'table',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html('<th>Financial Organization</th>').append(
    this.collection.map(function(startup){
      return new StartupView({model: startup}).render();
    }));
    return this.$el;
  }
})
