// Orders factory
myApp.factory('OrderFactory', function($http) {
    var factory = {};
    var orders = [];

    // Get orders
    factory.index = function(callback) {
        $http.get('/getOrders').success(function(data) {
            orders = data.Orders;
            callback(orders);
        });
    };

    // Add order
    factory.create = function(info, callback) {
        $http.post('/newOrder', info).success(function() {
            callback(orders);
        });
    };

    return factory;
});
//
