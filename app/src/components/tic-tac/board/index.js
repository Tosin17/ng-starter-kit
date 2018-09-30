import app from './../../../app-module';
import './board.scss'
import template from './board.html';
import boardController from  './board';

function board() {
  return {
    restrict: 'EA',
    controller: boardController,
    template
  }
}

export default app.directive('board', board);
