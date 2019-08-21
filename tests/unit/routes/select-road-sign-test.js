import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | select-road-sign', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:select-road-sign');
    assert.ok(route);
  });
});
