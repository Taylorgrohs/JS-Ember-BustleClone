import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "" ,
        author: this.get('author') ? this.get('author') : "" ,
        image: this.get('image') ? this.get('image') : "" ,
        body1: this.get('body1') ? this.get('body1') : "" ,
        body2: this.get('body2') ? this.get('body2') : "" ,
      };
      this.sendAction('save2', params);
    }
  }
});
