import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['votes:dsc'],
  sortedResponses: Ember.computed.sort('responses', 'sortBy'),

  actions: {
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('question');
    },

    upvote(response) {
      response.incrementProperty('votes', 1);
    }
  }
});
