import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
  controller: null,

   actions: {
       genSeries (type) {
           var val = this.get('value'),
                i,
                series = [];
             if (type === 'fibo') {
                 if (val >= 1) {
                   series[0] = 0;
                   series[1] = 1;
                 }
                 for(i=2; i<=val; i++) {
                     series[i] = series[i-2] + series[i-1];
                 }
                 series = series.join(' | ');
             } else if (type === 'even') {
                 for (i = 2; i <= val; i += 2) {
                   series.push(i);
                 }
                 series = series.join(' | ');
             }
           this.get('controller').set('data', series);
       }
   }
});
