window.EditStudentcontroller=function ($scope, $http, $routeParams,$location) {
    $scope.title = "Đây là chỉnh sửa ";
    const apistudents = "http://localhost:3000/students";
    let studentID=$routeParams.id;
    // $http. phương thức http(link api).then(công việc cần làm)
    // get ,post,put ,delete
    $http.get(
        apistudents + '/'+ studentID
        // `${apistudents}/${studentID}`
    ).then( function(response){
         if(response.status==200){
            // console.log(response.data);
            $scope.student={
                editID:response.data.id,
                name:response.data.ten,
                year:response.data.namSinh ,
                coure:response.data.chuyenNganh   
                }
         }
    });
    $scope.editStudent = function () {
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
                $scope.kiemtra.name = true
        }
        if (!$scope.student || !$scope.student.coure) {
            flag = false,
                $scope.kiemtra.name = true
        }
        if(flag){
            // nhập dữ  liệu input
            let newstudents = {
                ten: $scope.student.name,
                namSinh: $scope.student.year,
                chuyenNganh: $scope.student.coure
            }
            //  console.log( newStudent);
            $http.put(
               `${apistudents}/${studentID}`,
                newstudents
            ).then(function (response) {
                if (response.status == 200) {
                    $location.path("trang-chu")
                }
            })
        } else{
            alert("Nhập đầy đủ thông tin ")
        } 
    }
}