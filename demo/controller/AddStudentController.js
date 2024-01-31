window.AddstudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm sinh viên mới ";
    $scope.addStudent = function () {
        const apiStudent = "http://localhost:3000/students";
        // 
        let flag = true;
        $scope.kiemtra = {
            name: false,
            year: false,
            coure: false,
        }
        if (!$scope.student || !$scope.student.name) {
            flag = false,
                $scope.kiemtra.name = true
        }
        if (!$scope.student || !$scope.student.year) {
            flag = false,
                $scope.kiemtra.year = true
        }
        if (!$scope.student || !$scope.student.coure) {
            flag = false,
                $scope.kiemtra.coure = true
        }
        if(flag){
            // nhập dữ  liệu input
            let newstudents = {
                ten: $scope.student.name,
                namSinh: $scope.student.year,
                chuyenNganh: $scope.student.coure
            }
            //  console.log( newStudent);
            $http.post(
                apiStudent,
                newstudents
            ).then(function (response) {
                if (response.status == 201) {
                    $location.path("trang-chu")
                }
            })
        } else{
            alert("Nhập đầy đủ thông tin ")
        }
        
        
    }

}