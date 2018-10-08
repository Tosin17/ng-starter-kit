export default function appRoute($stateProvider) {
  $stateProvider.
    state('ticTac', {
      url: '/',
      template: '<board user="Tade"></board>'
    })
    .state('questions', {
      url: '/questionnaire',
      template: '<h1>Questions</h1>'
    });
}

appRoute.$inject = ['$stateProvider'];
