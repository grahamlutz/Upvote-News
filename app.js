var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = "Hello World!";
	$scope.posts = [
		{title:'post 1', upvotes: 0},
		{title:'post 2', upvotes: 0},
		{title:'post 3', upvotes: 1},
		{title:'post 4', upvotes: 0},
		{title:'post 5', upvotes: 3},
		{title:'post 6', upvotes: 0}
	];
	$scope.addPost = function() {
		$scope.posts.push({title: 'A new post!', upvotes: 0});
	};
}]);