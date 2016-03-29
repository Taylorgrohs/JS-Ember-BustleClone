import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(story, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
    },
  }
});
