window.addCustomerController = function($scope,$http,$location){
    $scope.addcustomer = function(){
        const apicustomer = "http://localhost:3000/customers";
        let flag = true;
        $scope.check = {
            name:false,
            emails:false,
            phone:false,
            location:false,
        }
        if(!$scope.customer || !$scope.customer.name){
            flag = false,
            $scope.check.name=true
        }
        if(!$scope.customer || !$scope.customer.emails){
            flag = false,
            $scope.check.emails=true
        }
        if(!$scope.customer || !$scope.customer.phone){
            flag = false,
            $scope.check.phone=true
        }
        if(!$scope.customer || !$scope.customer.location){
            flag = false,
            $scope.check.location=true
        }
        if(flag){
            // nhập dữ  liệu input
            let newcustomer = {
                ten: $scope.customer.name,
                email: $scope.customer.emails,
                sdt: $scope.customer.phone,
                diachi:$scope.customer.location,
            }
            //  console.log( newcustomers);
            $http.post(
                apicustomer,newcustomer
                
            ).then(function (response) {
                if (response.status == 201) {
                    $location.path("dat-phong")
                }
            })
        } else{
            alert("Nhập đầy đủ thông tin ")
        }
        
    }
    //  thằng này là sửa ko phải add em ạ 

}