window.DetailsCustomerController = function ($scope, $http, $routeParams) {
    const apicustomer = "http://localhost:3000/customers";
    let customerID = $routeParams.id;
    $http.get(
        `${apicustomer}/${customerID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.customer = {
                editid: response.data.id,
                name: response.data.ten,
                email: response.data.email,
                phone:response.data.sdt,
                adress: response.data.diachi
            }
        }
    })

}