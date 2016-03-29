import Ember from 'ember';

export default Ember.Component.extend({
  update(story, params) {
    this.sendAction('update', story, params);
  },
});
