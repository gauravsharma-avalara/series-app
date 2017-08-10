import Ember from 'ember';

export default Ember.Component.extend({
  printSeries: Ember.computed('series', function () {
    if (this.get('series')) {
      return this.get('series').join(' | ');
    }
  })
});
