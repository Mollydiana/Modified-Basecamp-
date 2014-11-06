function projectController($scope, $http, $routeParams, $location, ProjectFactory) {
    if (ProjectFactory.projectList.length > 0) {
            $scope.projects = ProjectFactory.projectList;
        }
        else {
            ProjectFactory.getProjects(function(response) {
        $scope.projects = response;
        ProjectFactory.projectList = $scope.projects;
    });
        }
    var projectId = $routeParams.id;
    var refresh = function () {
        $http.get('/proxy/projects/' + projectId + '.json').
            success(function (data) {
                $scope.project = data;
                console.log(data);
            }).error(function (data) {
                console.log("didn't work");
            });

        $http.get('/proxy/projects/' + projectId + '/topics.json').
            success(function (data) {
                $scope.topics = data;
                console.log(data);
            }).error(function (data) {
                console.log("didn't work");
            });

        $http.get('/proxy/projects/' + projectId + '/calendar_events.json').
            success(function (data) {
                $scope.calendars = data;
                console.log(data);
            }).error(function (data) {
                console.log("didn't work");
            });


    };

    refresh();
    $scope.update = function () {
        var data = {
            "name": $scope.projectName,
            "description": $scope.projectDescription
        };
        $http.put('/proxy/projects/' + projectId + '.json', data).
            success(function (newProject) {
                refresh();
                $scope.projectName = "";
                $scope.projectDescription = "";

            }).error(function (error) {
                console.log(error);
            });
    };

    $scope.deleteProject = function (project) {
        ProjectFactory.deleteProject(project, function() {
                   $location.path('/');
        });


//    $scope.newCalendar = function() {
//        var data = {
//            "name": $scope.calendarName
//
//        };
//        $http.post('/proxy/calendars.json', data).
//            success(function(){
//                console.log("worked");
//            }).error(function(error){
//                console.log('fail');
//            })
//
//    }

    };
    $scope.hasAttachment = function(filterData){
        if ($scope.attachmentBoolean) {
            return filterData.attachments > 0;
        }else {
            return true
        }
    };

    $scope.linkToSearch = function() {
    var link = $location.absUrl() + '?' + $scope.searchText;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", link);
};
}

