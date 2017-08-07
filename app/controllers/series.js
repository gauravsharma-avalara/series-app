import Ember from 'ember';

export default Ember.Controller.extend({
  data: null,
  init () {

    },

    actions: {
        genrateSeries (value, type) {
          var val = value,
              i,
              series = [];
            if (type === 'fibo') {
                series[0] = 0;
                series[1] = 1;
                for(i=2; i<=val; i++) {
                    series[i] = series[i-2] + series[i-1];
                }
                series = series.join(' | ');
                this.set('data', series);
            } else if (type === 'even') {
                for (var i = 2; i <= val; i += 2) {
                  series.push(i);
                }
                series = series.join(' | ');
                this.set('data', series);
            }
        }
    }
});
