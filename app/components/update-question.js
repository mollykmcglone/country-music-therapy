import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
