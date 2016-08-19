import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('question'),
      tags: this.store.findAll('tag'),
    });
  },

  actions:{
    save3(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
