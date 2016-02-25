var AppView = Backbone.View.extend({
  initialize: function(app){
    // this.searchView = new SearchView({});
    this.startupListView = new StartupListView({collection: this.model.get('funds')});
    this.model.get('funds').on('reset', this.render, this);
  },
  
  events:{

  },
  render: function(){
    return this.$el.append(this.startupListView.render());
  }

})
