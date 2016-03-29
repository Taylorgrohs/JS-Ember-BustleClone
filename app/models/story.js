import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  body1: DS.attr(),
  body2: DS.attr()
});
