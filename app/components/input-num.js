import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
   controller: null,

   actions: {
       genSeries (type) {
           var value = this.get('value');
           this.get('controller').send('genrateSeries', value, type);
       }
   }
});
