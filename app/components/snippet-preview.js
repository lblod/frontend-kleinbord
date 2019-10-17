import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if (this.source)
      this.element.children[0].innerHTML = this.source;
  }
});
