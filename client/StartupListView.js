var StartupListView = Backbone.View.extend({
  tagName: 'div',

  $x : $('<form action="" id="" method="">\
        <input type="" name="" class="searchValue" value="Search"/>\
        <button type="submit" class="findFunds">SEARCH</button>\
    </form>'), 

  initialize: function(){
    var view = this;
    this.$x.keydown(function(event){
      // when user presses enter
      if (event.which === 13){
        view.renderSearch();
      }
    })
  },

  events: {
      'click button.findFunds': 'search',
  },

  events: {
      'click button.findFunds': 'search',
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.$x);
    this.$el.append(this.collection.map(function(startup){
      return new StartupView({model: startup}).render();
    }));
    return this.$el;
  },

  search: function (){
    var searchName = $('.searchValue').val()
<<<<<<< dd628712fa2afe8c83ba763c01c696bf15842708
    var models = this.collection.models;
    var collection = [];
    _.each(models, function(model){
       _.each(model.attributes, function(att){
        if (JSON.stringify(att).includes(searchName)){
          if (collection[collection.length - 1] !== model){
              collection.push(model);
          }
        }
      })
    });
    return collection;
  },

  renderSearch: function(){
    var collection = this.search();
    this.$el.children().detach();
    this.$el.append(this.$x);
    this.$el.append(collection.map(function(fund){
      return new StartupView({model: fund}).render();
      })
    )
  }
=======
    // debugger;
    console.log(searchName);
    // var filtered = this.startups.where({ name: searchName});
    // console.log(filtered);
    // this.searchresultsView = new StartupListView({model: startup});
  },

>>>>>>> merge

})
