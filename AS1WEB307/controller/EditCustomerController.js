window.EditCustomerController = function($scope,$http,$routeParams,$location){
const apicustomer = "http://localhost:3000/customers";
let customerID = $routeParams.editID;
$http.get(
    `${apicustomer}/${customerID}`
).then(function (response) {
    if (response.status == 200) {
        $scope.customer = {
            editID: response.data.id,
            name: response.data.ten,
            emails: response.data.email,
            phone:response.data.sdt,
            adress: response.data.diachi
        }
    }
});
$scope.editcustomer = function(){
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
    if(!$scope.customer || !$scope.customer.adress){
        flag = false,
        $scope.check.adress=true
    }
    if(flag){
        // nhập dữ  liệu input
        let newcustomer = {
            ten: $scope.customer.name,
            email: $scope.customer.emails,
            sdt: $scope.customer.phone,
            diachi:$scope.customer.adress,
        }
        //  console.log( newcustomers);
        $http.put(
            `${apicustomer}/${customerID}`
            ,newcustomer
            
        ).then(function (response) {
            if (response.status == 201) {
                $location.path("dat-phong")
            }
        })
    } else{
        alert("Nhập đầy đủ thông tin ")
    }
    
}

}