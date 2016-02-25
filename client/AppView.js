var AppView = Backbone.View.extend({
  initialize: function(app){
    // this.searchView = new SearchView({});
    this.startupListView = new StartupListView({collection: this.model.get('startups')});
    this.model.get('startups').on("reset", this.render, this);
  },
  events:{

  },
  render: function(){
    return this.$el.append(this.startupListView.render());
  }

})
