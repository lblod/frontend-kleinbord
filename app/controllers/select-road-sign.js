import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { and } from '@ember/object/computed';
import { task } from 'ember-concurrency';
import fetch from 'fetch';

export default Controller.extend({
  urlGnApp: 'https://dev.gelinkt-notuleren.lblod.info',
  sourceUrl: 'https://dev.kleinbord.lblod.info/snippets/example-1.html',
  mockLogin: true,

  importEnabled: and('urlGnApp', 'sourceUrl'),
  urlGnPath: computed('containerUri', function() {
    return this.containerUri ? '/import/edit' : '/import/new';
  }),

  fetchSource: task(function* () {
    if (this.sourceUrl) {
      try {
        const res = yield fetch(this.sourceUrl);
        const source = yield res.text();
        this.set('source', source);
      } catch (e) {
        this.set('source', 'Failed to fetch source');
      }
    } else {
      this.set('source', null);
    }
  }).keepLatest(),

  actions: {
    importInEditor() {
      if (this.urlGnApp) {
        let params = [];
        params.push(`omitCredentials=true`);
        params.push(`source=${this.sourceUrl}`);

        if (this.containerUri)
          params.push(`target=${this.containerUri}`);

        params.push(`mock=${this.mockLogin}`);

        window.location.replace(`${this.urlGnApp}${this.urlGnPath}?${params.join('&')}`);
      }
    }
  }
});
