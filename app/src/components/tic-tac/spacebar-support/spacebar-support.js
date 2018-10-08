import angular from 'angular';

export default function spacebarSupport($scope, el) {
  const $ = angular.element;
  const vid = el[0];

  $(document.body).on('keypress', (evt) => {
    if (evt.keyCode === 32) {
      if (vid.pause) {
        vid.play();
      } else {
        vid.pause();
      }
    }
  })
}

spacebarSupport.$inject = ['$scope'];
