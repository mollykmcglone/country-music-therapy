import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  tags: DS.hasMany('tag', { async: true}),
});
