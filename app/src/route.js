export default function appRoute($stateProvider) {
  $stateProvider.
    state('ticTac', {
      url: '/',
      template: '<board></board>'
    })
    .state('questions', {
      url: '/questionnaire',
      template: '<questionaire></questionaire>'
    });
}

appRoute.$inject = ['$stateProvider'];
