import './info-card.scss';

app.directive('infoCard', () => {
  return {
    restrict: 'E',
    templateUrl: 'src/components/info-cards/templates/info-card.html',
    controller: function($scope) {
      $scope.person1 = {
        name: 'Luke Skywalker',
        address: {
          street: 'PO Box 123',
          city: 'Secret Rebel Base',
          planet: 'Yavin 4'
        },
        friends: [
          'Han',
          'Leia',
          'Chewbacca'
        ],
        level: 0
      };
      $scope.person2 = {
        name: 'Han Solo',
        address: {
          street: 'PO Box 123',
          city: 'Mos Eisley',
          planet: 'Tattoine'
        },
        friends: [
          'Han',
          'Leia',
          'Chewbacca'
        ],
        level: 1
      };
      $scope.droid1 = {
        name: 'R2-D2',
        specifications: {
          manufacturer: 'Industrial Automaton',
          type: 'Astromech',
          productLine: 'R2 series'
        },
        level: 1
        // owners...etc
      };
    }
  };
});

app.directive('userPanel', () => {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'src/components/info-cards/templates/userPanel.html'
  };
});

app.directive('stateDisplay', function() {
  return {
    link: function(scope, el, attrs) {
      const parms = attrs['stateDisplay'].split(' ');
      const linkVar = parms[0];
      const classes = parms.slice(1);
      // console.log(attrs, attrs['stateDisplay'], parms, linkVar);

      scope.$watch(linkVar, function(newVal) {
        el.removeClass(classes.join(' '));
        el.addClass(classes[newVal]);
      });
    }
  };
});


app.directive('droidInfoCard', function() {
  return {
    templateUrl: 'src/components/info-cards/templates/droidInfoCard.html',
    restrict: 'E',
    scope: {
      droid: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      // console.log($scope.droid.level);
      $scope.nextState = function() {
        $scope.droid.level++;
        $scope.droid.level = $scope.droid.level % 4;
      };
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };
    }
  };
});

app.directive('personInfoCard', function() {
  return {
    templateUrl: 'src/components/info-cards/templates/personInfoCard.html',
    restrict: 'E',
    scope: {
      person: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      $scope.nextState = function() {
        $scope.person.level++;
        $scope.person.level = $scope.person.level % 4;
      };
      $scope.knightMe = function(person) {
        person.rank = 'knight';
      };
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };

      $scope.removeFriend = function(friend) {
        let idx = $scope.person.friends.indexOf(friend);
        if(idx > -1) {
          $scope.person.friends.splice(idx, 1);
        }
      };
    }
  };
});

app.directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: 'src/components/info-cards/templates/removeFriend.html',
    scope: {
      notifyParent: '&method'
    },
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      };
      $scope.cancelRemove = function() {
        $scope.removing = false;
      };
      $scope.confirmRemove = function() {
        $scope.notifyParent();
      };

    }
  };
});

app.directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'src/components/info-cards/templates/address.html',
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      };
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      };
    }
  };
});
