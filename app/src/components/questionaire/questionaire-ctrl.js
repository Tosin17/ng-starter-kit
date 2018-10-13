export default function questionaireCtrl($scope) {
  $scope.answer = {
    location: 'Ottawa',
    capital: 'No'
  };

  $scope.yes = () => console.log('YES');
  $scope.nope = () => console.log('NO')

}

questionaireCtrl.$inject = ['$scope'];
