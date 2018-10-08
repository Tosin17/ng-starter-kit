import './nav.scss';
import template from './nav.html';

function appNav() {
  return {
    restrict: 'E',
    template
  }
}

app.directive('appNav', appNav);
