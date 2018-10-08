export default function appRoute($stateProvider) {
  $stateProvider.
    state('ticTac', {
      url: '/',
      template: '<board></board>'
    });
}

appRoute.$inject = ['$stateProvider'];
