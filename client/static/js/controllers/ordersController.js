// Orders Controller
myApp.controller('OrdersController', function($scope, CustomerFactory, OrderFactory, ProductFactory) {
    $scope.orders = [];
    $scope.customerList = [];
    $scope.number = 20; //limit of orders

    // Set orders to orders from db
    OrderFactory.index(function(data) {
        $scope.orders = data;
    });

    // Product populate
    ProductFactory.index(function(data) {
        $scope.products = data;
    });

    // For looping through quantity select
    $scope.getNumber = function(num) {
        return new Array(num);
    }

    CustomerFactory.index(function(data) {
        $scope.customerList = data;
    });

    $scope.toDay = function(sentDate) {
        return moment(sentDate).format("MMMM Do YYYY")
    };

    $scope.addOrder = function(){
        // Subtract quantity ordered from product quantity
        ProductFactory.updateProduct($scope.newOrder, function(data1){
            //Create Order
            OrderFactory.create($scope.newOrder, function(data2) {
                OrderFactory.index(function(data) {
                    $scope.orders = data;
                });
            });
        });
    };
});
