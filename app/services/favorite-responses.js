import Ember from 'ember';

export default Ember.Service.extend({
  responses: [],

  add(response) {
    this.get('responses').pushObject(response);
  },

  remove(response) {
    this.get('responses').removeObject(response);
  },

  empty() {
    this.get('responses').clear();
  },
});
