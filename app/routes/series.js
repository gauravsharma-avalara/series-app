import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('series');
  },
  setupController (controller, model) {
    this.controllerFor('series').set('model', model);
  }
});
