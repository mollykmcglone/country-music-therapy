import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions:{
    questionFormShow(){
      this.set('addNewQuestion', true);
    },

    save1(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
      };
      this.set('title', '');
      this.set('author', '');
      this.set('body', '');
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
