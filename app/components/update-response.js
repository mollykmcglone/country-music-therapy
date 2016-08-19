import Ember from 'ember';

export default Ember.Component.extend({
  updateResponseForm: false,
  actions: {
    updateResponseForm() {
      this.set('updateResponseForm', true);
    },
    update(response) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.set('updateResponseForm', false);
      this.sendAction('update', response, params);
    }
  }
});
