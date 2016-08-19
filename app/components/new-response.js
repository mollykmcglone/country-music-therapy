import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.set('addNewResponse', false);
      this.sendAction('save2', params);
    }
  }
});
