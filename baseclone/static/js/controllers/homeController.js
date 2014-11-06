function homeController($scope, $http, ProjectFactory) {
    ProjectFactory.getProjects(function(response) {
        $scope.projects = response;
        ProjectFactory.projectList = $scope.projects;
    });

    $http.get('/proxy/calendars.json').
        success(function (data) {
            $scope.calendars = data;
            console.log(data);
        }).error(function (data) {
            console.log("didn't work");
        });

    $scope.newProject = function () {
        var data = {
                "name": $scope.projectName,
                "description": $scope.projectDescription
            };
        $http.post('/proxy/projects.json', data).
            success(function (newProject) {
                $scope.projects.push(newProject);
                    $scope.projectName = "";
                    $scope.projectDescription = "";

            }).error(function (error) {
                console.log(error);

            });
    };
     $scope.delete = function (project) {
        ProjectFactory.deleteProject(project, function() {
             var index = $scope.projects.indexOf(project);
            if( index >- 1) {
                $scope.projects.splice(index, 1);
            }
            ProjectFactory.projectList = $scope.projects;
         });
    };
}