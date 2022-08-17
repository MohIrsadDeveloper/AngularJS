mainApp.controller('studentController', function ($scope) {
    $scope.student = {
        firstName : "Abdul",
        lastName : "Idrisi",
        fees : 500,
        subjects : [
            {name : 'Physics', marks : 70},
            {name : 'Chemistry', marks : 80},
            {name : 'Maths', marks : 65},
        ],
        fullName : function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " "  + studentObject.lastName;
        }
    }
})