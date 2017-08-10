import Ember from 'ember';

export default Ember.Controller.extend({
    series: null,

    actions: {
      onSeriesDone (data) {
        this.set('series', data);
      }
    }
});
