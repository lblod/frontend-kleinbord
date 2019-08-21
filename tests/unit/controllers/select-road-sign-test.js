import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | select-road-sign', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:select-road-sign');
    assert.ok(controller);
  });
});
