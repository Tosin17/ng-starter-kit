import spaceBarSupportCtrl from './spacebar-support';

function spacebarSupport() {
  return {
    restrict: 'A',
    scope: true,
    link: spaceBarSupportCtrl
  };
}

export default app.directive('spacebarSupport', spacebarSupport);
