import Controller from '@ember/controller';
import ENV from 'frontend-kleinbord/config/environment';

export default Controller.extend({
  actions: {
    async sendRoadSign() {
      if (this.roadSign) {
        window.location.replace(ENV.roadSignRedirectionBaseUrl+"?mock&documentUri="+this.roadSign+"&documentContainerUri="+ENV.documentContainerUri);
      }
    }
  }
});
