import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  number: null,
  series: Ember.A(),

  init () {
    //console.log('model');
  }
});
