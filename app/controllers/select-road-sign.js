import Controller from '@ember/controller';
import { and } from '@ember/object/computed';

export default Controller.extend({
  urlGnApp: 'http://dev.gelinkt-notuleren.lblod.info',
  mockLogin: true,

  importEnabled: and('urlGnApp', 'containerUri'),

  actions: {
    importInEditor() {
      if (this.urlGnApp && this.containerUri) {
        window.location.replace(`${this.urlGnApp}/fetch-rdfa?source=https://dev.kleinbord.lblod.info/input/example.html&target=${this.containerUri}&mock=${this.mockLogin}`);
      }
    }
  }
});
