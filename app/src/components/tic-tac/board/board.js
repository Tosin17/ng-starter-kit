export default function boardController($scope) {
  $scope.board = 'Test Board';
  console.log($scope.board);
}

boardController.$inject = ['$scope'];
