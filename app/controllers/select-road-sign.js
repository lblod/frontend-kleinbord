import Controller from '@ember/controller';

export default Controller.extend({
  urlGnApp: 'http://dev.gelinkt-notuleren.lblod.info/import/edit',
  sourceUrl: 'https://dev.kleinbord.lblod.info/snippets/example.html',
  mockLogin: false,

  actions: {
    async sendRoadSign() {
      if (this.urlGnApp) {
        let params = [];
        params.push(`source=${this.sourceUrl}`);

        if(this.containerUri)
          params.push(`target=${this.containerUri}`);

        params.push(`mock=${this.mockLogin}`);

        window.location.replace(this.urlGnApp +`?${params.join('&')}`);
      }
    }
  }
});
