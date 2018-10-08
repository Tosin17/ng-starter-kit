export default function boardController($scope) {
  console.log($scope.user || 'No user');
}

boardController.$inject = ['$scope'];
