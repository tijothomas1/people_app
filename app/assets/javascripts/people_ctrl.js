(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope){

    $scope.persons = [
                    {
                      name: "James Smith",
                      bio: "He is your run of the mill person.",
                      bioVisible: false
                    },{
                      name: "Tim Thompson",
                      bio: "Tim loves to play sports and program.",
                      bioVisible: false
                    },{
                      name: "Lena Dominguez",
                      bio: "Lena loves photography and the arts.",
                      bioVisible: false
                    }];

    $scope.addPerson = function(personName, personBio, personBioVisible){
      var newPerson = {
        bio: personBio,
        name: personName,
        bioVisible: personBioVisible
      };

      $scope.persons.push(newPerson);

      $scope.persons.newPersonName = null;
      $scope.persons.newPersonBio = null;
      $scope.persons.newPersonBioVisible = null;
    };

    $scope.toggleVisible = function(person){
      person.bioVisible = !person.bioVisible;
    };

    $scope.deletePerson = function(person){
      $scope.people.splice($scope.people.indexOf(person), 1);
    };

    window.scope = $scope;
  });

}());