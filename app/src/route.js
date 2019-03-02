export default function appRoute($stateProvider) {
  $stateProvider.
    state('state1', {
      url: '/',
      template: '<h1>State 1</h1>'
    })
    .state('state2', {
      url: '/state2',
      template: '<h1>State 2</h1>'
    })
    .state('state3', {
      url: '/state3',
      template:'<h1>State 3</h1>'
    });
}

appRoute.$inject = ['$stateProvider'];
