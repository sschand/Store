// Dashboard controller
myApp.controller('DashboardController', function($scope, ProductFactory, OrderFactory, CustomerFactory) {
    $scope.products = [];
    $scope.customers = [];
    $scope.orders = [];

    // Set products to products from db
    ProductFactory.index(function(data) {
        $scope.products = data;
    });

    // Set orders to orders from db
    OrderFactory.index(function(data) {
        $scope.orders = data;
    });

    // Set customers to customers from db
    CustomerFactory.index(function(data) {
        $scope.customers = data;
    });

    // Time ago
    $scope.timeAgo = function(sentDate) {
        return moment(sentDate).fromNow();
    };

    $(function() {
        $(".hide_description").on("click", function(){
            $("#description").slideUp( "slow", function() {
                // Animation complete.
            });
        })
    })
})
