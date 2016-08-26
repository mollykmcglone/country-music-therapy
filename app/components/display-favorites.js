import Ember from 'ember';

export default Ember.Component.extend({
  favoriteResponses: Ember.inject.service(),

  actions: {
    remove(response) {
      this.get('favoriteResponses').remove(response);
    },
    empty() {
      this.get('favoriteResponses').empty();
    }
  }
});
