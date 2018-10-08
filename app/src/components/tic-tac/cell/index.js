import template from './cell.html';
import './cell.scss'
import '../spacebar-support'

function cell() {
  return {
    restrict: 'E',
    template,
  }
}

export default app.directive('boardCell', cell);
