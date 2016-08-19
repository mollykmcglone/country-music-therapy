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
      };
      this.set('updateResponseForm', false);
      this.sendAction('update', response, params);
    }
  }
});
