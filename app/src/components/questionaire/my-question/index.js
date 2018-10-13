import template from './my-question.html'
import myQuestionCtrl from './my-question-ctrl'

function myQuestion() {
  return {
    restrict: 'E',
    scope: {
      questionText: '@q'
    },
    controller: myQuestionCtrl,
    template,
    transclude: true
  }
}

app.directive('myQuestion', myQuestion);
