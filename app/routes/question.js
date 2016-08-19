import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
    },
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
      var newTag = this.store.createRecord('tag', params);
      var question = params.question;
      question.get('tags').addObject(newTag);
      newTag.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('question');
    },
  }
});
