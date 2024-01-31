window.ListCustomerController = function ($scope, $http) {
    const apicustomer = "http://localhost:3000/customers";
    function getData() {
        $http.get(apicustomer).then(function (response) {
            if (response.status == 200) {
                $scope.listcustomer = response.data;
            }
        })
    }
    getData();
    $scope.deleteCustomer = function(deleteID){
        if(deleteID){
            let confirm = window.confirm("Bạn có muốn xóa không ?");
            if(confirm){
                $http.delete(
                    `${apicustomer}/${deleteID}`
                ).then(function(response){
                    if(response.status == 200){
                        alert("Xóa Thành Công")
                    }
                })
            }
        }
    }

}