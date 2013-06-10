
var app = angular.module('social-app', ['social-app.user']);

app.controller('MyCtrl', function($scope) {
  $scope.currentUser = {
    name:     'Jules Winnfield',
    photo:    'jules.jpg',
    job:      'Hitman',
    citation: 'Ezekiel 25:17',
    friends: [
      { name: 'Vincent Vega',       photo: 'vincent.jpg',   messages: 2 },
      { name: 'Mia Wallace',        photo: 'mia.jpg' },
      { name: 'Marsellus Wallace',  photo: 'marsellus.jpg', messages: 5 },
      { name: 'Butch Coolidge',     photo: 'butch.jpg' },
      { name: 'Jimmie Dimmick',     photo: 'jimmie.jpg',    messages: 1 },
      { name: 'Winston Wolfe',      photo: 'winston.jpg' }
    ]
  };
});


var directiveModule = angular.module('social-app.user', []);

directiveModule.directive('profile', function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    replace: true,
    transclude: true,
    template: '<div class="profile-box">' +
              '  <div ng-transclude></div>' +
              '  <div>' +
              '    <h1>{{user.name}}</h1>' +
              '    <p><strong>Job:</strong> {{user.job}}</p>' +
              '    <p><strong>Favorite citation:</strong> {{user.citation}}</p>' +
              '  </div>' +
              '</div>'
  }
});

directiveModule.directive('photo', function() {
  return {
    restrict: 'EA',
    scope: {
      person: '='
    },
    replace: true,
    template: '<div class="photo">' +
              '  <img ng-src="photos/{{person.photo}}"/>' +
              '</div>',
    link: function(scope, element, attributes) {
      if (scope.person.messages) {
        element.append("<span>"+scope.person.messages+"</span>");
      }
    }
  }
});