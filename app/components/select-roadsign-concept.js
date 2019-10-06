import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  store: service(),

  async init() {
    this._super(...arguments);
    this.set('roadsigns', await this.store.findAll('verkeersbordconcept'));
  },

  actions: {
    setRoadsign(roadsign) {
      this.set('roadsign', roadsign);
    }
  }
});
