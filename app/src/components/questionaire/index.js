import './questionaire.scss';
import template from './questionaire.html';
import questionaireCtrl from './questionaire-ctrl';
import './my-question';

function questionaire() {
  return {
    restrict: 'E',
    scope: {
      questionText: '@text'
    },
    controller: questionaireCtrl,
    transclude: true,
    template
  };
}

app.directive('questionaire', questionaire);
