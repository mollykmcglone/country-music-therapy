import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  question: DS.attr(),
  tags: DS.hasMany('tag', { async: true}),
});
