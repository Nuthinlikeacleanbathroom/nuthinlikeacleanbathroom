var StartupListView = Backbone.View.extend({
  tagName: 'div',

  $x : $('<form action="" id="" method="">\
        <input type="" name="" class="searchValue form-control" placeholder="Search"/>\
        <button type="submit" class="findFunds btn btn-secondary-outline btn-block">Reset</button>\
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

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.$x);
    this.$el.append(this.collection.map(function(fund){
      return new FundView({model: fund}).render();
    }));
    $('#funds-list').append(this.$el);
  },

  search: function (){
    var searchName = $('.searchValue').val()
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
      return new FundView({model: fund}).render();
      })
    )
  }

})
