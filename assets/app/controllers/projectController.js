sbapp.controller('ProjectController', [
  '$state',
  '$scope',
  'ProjectService',
  '$mdDialog',
  ProjectController
]);

function ProjectController($state, $scope, ProjectService, $mdDialog) {
  var vm = this;

  /* CALLABLE MEMBERS */

  vm.setCurrentProject = $scope.setCurrentProject;
  vm.projects = $scope.currentUser ? ProjectService.project.query({owner: $scope.currentUser.id}) : [];


  /* ACTIONS */
  $scope.setCurrentProject(null);

  /* FUNCTIONS */


}

