import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  posts: DS.hasMany('question', { async: true})
});
