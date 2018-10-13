export default function appRoute($stateProvider) {
  $stateProvider.
    state('ticTac', {
      url: '/',
      template: '<board></board>'
    })
    .state('questions', {
      url: '/questionnaire',
      template: '<questionaire></questionaire>'
    })
    .state('infoCards', {
      url: '/info-cards',
      template:'<info-card></info-card>'
    });
}

appRoute.$inject = ['$stateProvider'];
