import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(response) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    },
    update(response, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          response.set(key,params[key]);
        }
      });
      response.save();
      this.transitionTo('question', params.question);
    },

    upvote(response) {
      this.sendAction('upvote', response);
    }
  }
});
