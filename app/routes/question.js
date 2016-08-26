import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    save3(params) {
      var newResponse = this.store.createRecord('response', params);
      var question = params.question;
      question.get('responses').addObject(newResponse);
      newResponse.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    update(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      var response_deletions = question.get('responses').map(function(response) {
        return response.destroyRecord();
      });
      Ember.RSVP.all(response_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveTag3(params) {
      var self=this;
      var question = params.question;

      this.store.query('tag', {
        orderBy: 'text',
        equalTo: params.text}).then(function(existingTags) {
          if(existingTags.get('length') === 0) {
            var tag = self.store.createRecord('tag', params);
          } else {
            var tag = existingTags.get('firstObject');
          }

          if(question.get('tags').toArray().includes(tag)) {
          } else {
            question.get('tags').addObject(tag);
            tag.get('questions').addObject(question);
            question.save();
            tag.save();
          }
          self.transitionTo('question', params.question);
        });
      },

    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('question');
    },
  }
});
