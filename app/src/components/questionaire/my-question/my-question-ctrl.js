export default function myQuestionCtrl($scope) {
  $scope.questionText = $scope.questionText || 'No questions yet';
}

myQuestionCtrl.$inject = ['$scope'];
