function discussionController($scope, $routeParams, Message, $location) {

    console.log($routeParams);
    var projectId = $routeParams.projectId;
    var discussionId = $routeParams.discussionId;
    var parameters = {projectId: projectId, discussionId: discussionId};
    $scope.discussion = Message.get(parameters);


    $scope.editDiscussion = function () {
        Message.update(parameters, {subject: $scope.newSubject});
    };


    $scope.delete = function (discussion) {
        $scope.discussion = Message.delete(parameters);
        $location.path('/projects/' + projectId);
    };
}