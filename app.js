var app = angular.module('upvoteNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = "Hello World!";
	$scope.posts = [
		{title:'post 1', upvotes: 0},
		{title:'post 2', upvotes: 0},
		{title:'post 3', upvotes: 0},
		{title:'post 4', upvotes: 0},
		{title:'post 5', upvotes: 0},
		{title:'post 6', upvotes: 0}
	];
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