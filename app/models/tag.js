import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  number_of_questions: DS.attr(),
  questions: DS.hasMany('question', { async: true})
});
