mainApp.controller('studentController', function ($scope) {
    $scope.reset = function () {
        $scope.firstName = "Abdul";
        $scope.lastName = "Idrisi";
        $scope.email = "abdul@gmail.com";
    }
    $scope.reset();
})