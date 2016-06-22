myApp.controller('ProductsController', function($scope, ProductFactory) {
    $scope.products = [];
    $scope.number = 100; //limit of orders

    // Grab all Products
    ProductFactory.index(function(data) {
        $scope.products = data;
    });

    // For looping through quantity select
    $scope.getNumber = function(num) {
        return new Array(num);
    }

    // Create/Add product
    $scope.addProduct = function() {
        ProductFactory.create($scope.newProduct, function(data) {
            ProductFactory.index(function(data) {
                $scope.products = data;
            });
        });
    }
});
