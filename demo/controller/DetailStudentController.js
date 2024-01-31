window.DetailStudentcontroller = function ($scope, $http, $routeParams) {
    $scope.title = "Đây là chi tiết sinh vên ";
    // dùng để lấy dữ liệu trên thanh URL
    const apistudents = "http://localhost:3000/students";
    let studentID=$routeParams.id;
    // $http. phương thức http(link api).then(công việc cần làm)
    // get ,post,put ,delete
    $http.get(
        apistudents + '/'+ studentID
        //`${apistudents}/${studentID}`
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
}