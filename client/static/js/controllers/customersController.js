// Customers Controller
myApp.controller('CustomersController', function($scope, CustomerFactory) {
    $scope.customers = [];
    $scope.errors = [];

    // On page load, get all customers and put into scope
    CustomerFactory.index(function(data, customerExists) {
        $scope.customers = data;
        $scope.errors = [];
        // $scope.customerExists = customerExists;
    });

    $scope.toDay = function(date) {
        return moment(date).format("MMMM Do YYYY")
    };
    // Add customer
    $scope.addCustomer = function(){
        CustomerFactory.create($scope.newCustomer, function (data, customerExists){
            $scope.newCustomer = "";

            CustomerFactory.index(function(data) {
                if(!customerExists){
                    $scope.customers = data;
                }
                $scope.errors.push(customerExists);

            });
        });
    }
    //
    // Delete customer
    $scope.delete = function(customer){
        CustomerFactory.delete(customer, function(){
            // After delete is done, just update the view by refreshing the scope data
            CustomerFactory.index(function(data) {
                $scope.customers = data;
                $scope.newOrder = {};
            });
        })
    }
});
