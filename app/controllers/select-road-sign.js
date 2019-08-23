import Controller from '@ember/controller';

export default Controller.extend({
  urlGnApp: 'http://dev.gelinkt-notuleren.lblod.info',
  mockLogin: false,

  actions: {
    async sendRoadSign() {
      if (this.urlGnApp && this.containerUri) {
        window.location.replace(this.urlGnApp+'/fetch-rdfa?source=<https://dev.kleinbord.lblod.info/input/example.html>&target=<'+this.containerUri+'>&mock='+this.mockLogin);
      }
    }
  }
});
