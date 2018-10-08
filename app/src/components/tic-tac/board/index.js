/* eslint no-undef: "off" */

import './board.scss';
import template from './board.html';
import boardController from  './board';

function board() {
  return {
    scope: {
      user: '@'
    },
    restrict: 'EA',
    controller: boardController,
    template
  };
}

export default app.directive('board', board);
