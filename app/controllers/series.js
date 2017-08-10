import Ember from 'ember';

export default Ember.Controller.extend({
    data: null,

    actions: {
      onSeriesDone (data) {
        this.set('data', data);
      }
    }
});
