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
        votes: 0,
        question: this.get('question'),
      };
      this.set('author', '');
      this.set('content', '');
      this.set('addNewResponse', false);
      this.sendAction('save2', params);
    }
  }
});
