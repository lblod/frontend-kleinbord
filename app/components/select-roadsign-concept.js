import Component from '@ember/component';
import { inject as service } from '@ember/service'
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  store: service(),

  async init() {
    this._super(...arguments);
    this.set('roadsigns', await this.store.findAll('verkeersbordconcept'));
  },

  search: task(function* (term) {
    yield timeout(600);
    return this.store.query('verkeersbordconcept', {
      sort: 'verkeersbordcode',
      filter: term
    });
  }),

  actions: {
    setRoadsign(roadsign) {
      this.set('roadsign', roadsign);
    }
  }
});
