// Controller for the No-Frills Orion UI

app.controller('noFrillsController', function ($scope,$log,api) {

    //
    // Users
    //

    $scope.clearUser = function() {
        $scope.userEdit = false;
        $scope.userName = null;
        $scope.userEmail = null;
    }

    $scope.viewUsers = function() {
        $scope.users = api.get("users");
        $scope.view = "users";
    }

    $scope.getUser = function(userId) {
        api.get("users/"+userId).
            success(function(data, status, headers, config) {
                $scope.userEdit = true;
                $scope.userId = data.id;
                $scope.userName = data.name;
                $scope.userEmail = data.email;
                api.get("users/"+$scope.userId+"/roles").
                    success(function(data,status,headers,config){
                        $scope.userRoles = data.results;
                    }).
                    error(function(data, status, headers, config) {
                        alert("HTTP ERROR "+status);
                        $scope.userRoles = [];
                    });
                $scope.roles = api.get("roles");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
                $scope.clearUser();
            });
    }

    $scope.deleteUser = function(userId) {
        $scope.clearUser();
        api.delete("users/"+userId).
            success(function(data, status, headers, config) {
                $scope.users = api.get("users");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }

    $scope.postUser = function() {
        user = {
            name : $scope.userName,
            email : $scope.userEmail
        };
        $scope.clearUser();
        api.post("users",user).
            success(function(data, status, headers, config) {
                $scope.users = api.get("users");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    $scope.saveUser = function() {
        user = {
            id : $scope.userId,
            name : $scope.userName,
            email : $scope.userEmail
        };
        $scope.clearUser();
        api.put("users/"+$scope.userId,user).
            success(function(data, status, headers, config) {
                $scope.users = api.get("users");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    $scope.addUserRole = function(roleId) {
        var userRole = {
            user : { id: $scope.userId },
            role : { id: roleId }
        };
        api.post("userRoles",userRole).
            success(function(data, status, headers, config) {
                $scope.userRoles = api.get("users/"+$scope.userId+"/roles");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }

    //
    // Roles
    //

    $scope.viewRoles = function() {
        $scope.roles = api.get("roles");
        $scope.view = "roles";
    }

    $scope.getRole = function(roleId) {
        api.get("roles/"+roleId).
            success(function(data, status, headers, config) {
                $scope.roleId = data.id;
                $scope.roleName = data.name;
                $scope.roleEdit = true;
                $scope.rolePermissions = api.get("roles/"+roleId+"/permissions");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
                $scope.roleEdit = false;
                $scope.roleName = null;
                $scope.roleEmail = null;
            });
    }

    $scope.deleteRole = function(roleId) {
        $scope.roleEdit = false;
        $scope.roleName = null;
        $scope.roleEmail = null;
        api.delete("roles/"+roleId).
            success(function(data, status, headers, config) {
                $scope.roles = api.get("roles");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }

    $scope.postRole = function() {
        role = {
            name : $scope.roleName
        };
        $scope.roleEdit = false;
        $scope.roleName = null;
        api.post("roles",role).
            success(function(data, status, headers, config) {
                $scope.roles = api.get("roles");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    $scope.saveRole = function() {
        role = {
            id : $scope.roleId,
            name : $scope.roleName
        };
        $scope.roleEdit = false;
        $scope.roleName = null;
        api.put("roles/"+$scope.roleId,role).
            success(function(data, status, headers, config) {
                $scope.roles = api.get("roles");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    //
    // Projects
    //

    $scope.viewProjects = function() {
        $scope.projects = api.get("projects");
        $scope.view = "projects";
    }

    $scope.getProject = function(projectId) {
        api.get("projects/"+projectId).
            success(function(data, status, headers, config) {
                $scope.projectId = data.id;
                $scope.projectName = data.name;
                $scope.projectEdit = true;
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
                $scope.projectEdit = false;
                $scope.projectName = null;
                $scope.projectEmail = null;
            });
    }

    $scope.deleteProject = function(projectId) {
        $scope.projectEdit = false;
        $scope.projectName = null;
        $scope.projectEmail = null;
        api.delete("projects/"+projectId).
            success(function(data, status, headers, config) {
                $scope.projects = api.get("projects");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }

    $scope.postProject = function() {
        project = {
            name : $scope.projectName
        };
        $scope.projectEdit = false;
        $scope.projectName = null;
        api.post("projects",project).
            success(function(data, status, headers, config) {
                $scope.projects = api.get("projects");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    $scope.saveProjects = function() {
        role = {
            id : $scope.projectId,
            name : $scope.projectName
        };
        $scope.projectEdit = false;
        $scope.projectName = null;
        api.put("projects/"+$scope.projectId,project).
            success(function(data, status, headers, config) {
                $scope.projects = api.get("projects");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

} );