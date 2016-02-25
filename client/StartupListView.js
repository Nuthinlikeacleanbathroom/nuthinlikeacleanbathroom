var StartupListView = Backbone.View.extend({
  tagName: 'div',

  $x : $('<form action="" id="" method="">\
        <input type="" name="" class="searchValue" value="Search"/>\
        <button type="submit" class="findFunds">SEARCH</button>\
    </form>'), 

  initialize: function(){
    this.render();
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
    // debugger;
    console.log(searchName);
    // var filtered = this.startups.where({ name: searchName});
    // console.log(filtered);
    // this.searchresultsView = new StartupListView({model: startup});
  },


})
