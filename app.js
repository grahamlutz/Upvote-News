(function() {
var app = angular.module('upvoteNews', ['ui.router', 'ngRoute']);

app.factory('posts', [function(){
	var o = {
    posts: [
    	{title: 'LinkedIn', link: "http://linkedin.com/in/grahamlutz", upvotes: 0},
    	{title: 'Google', link: "http://www.google.com", upvotes: 0},
    	{title: 'Facebook', link: "http://www.facebook.com", upvotes: 0}
    ]
  	};
  	return o;
}]);

app.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			});
		$urlRouterProvider.otherwise('home');
	}
]);

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
	$scope.test = "Hello World!";
	$scope.posts = posts.posts;
	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link, 
			upvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	}
}]);

})();