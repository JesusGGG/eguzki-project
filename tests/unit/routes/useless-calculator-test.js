import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | useless-calculator', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:useless-calculator');
    assert.ok(route);
  });
});
