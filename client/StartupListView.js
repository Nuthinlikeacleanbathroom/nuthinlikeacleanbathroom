var StartupListView = Backbone.View.extend({
  tagName: 'div',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.collection.map(function(startup){
      return new StartupView({model: startup}).render();
    }));
    return this.$el;
  }
})
