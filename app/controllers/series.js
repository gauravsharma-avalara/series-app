import Ember from 'ember';

export default Ember.Controller.extend({
  data: null,
  init () {
      
    },

    actions: {
        genrateSeries (value, type) {
          var val = value;
            if (type === 'fibo') {
                var i,
                    fibSr = [];
                fibSr[0] = 0;
                fibSr[1] = 1;
                for(i=2; i<=val; i++) {
                    fibSr[i] = fibSr[i-2] + fibSr[i-1];
                }
                fibSr = fibSr.join('|');
                this.set('data', fibSr);
            } else if (type === 'even') {
                var evenSr=[];
                for (var i = 2; i <= val; i += 2) {
                  evenSr.push(i);
                }
                evenSr = evenSr.join('|');
                this.set('data', evenSr);
            }
        }
    }
});
