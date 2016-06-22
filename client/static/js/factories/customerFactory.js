// Customer Factory
myApp.factory('CustomerFactory', function($http) {
    var factory = {};
    var customers = [];
    var customerExists = '';

    // Get all the customers
    factory.index = function(callback) {
        $http.get('/getCustomers').success(function(data){
            customers = data.Customers;

            callback(customers);
        });
    }

    // Add customer
    factory.create = function(info, callback) {
        $http.post('/new/'+info).success(function (data){
            if (typeof data == 'object') {
                customerExists = data;
            }else{
                customerExists = '';
            }
            callback(customers, customerExists);
        });
    }

    // delete customers
    factory.delete = function(customer, callback) {
        $http.delete('/remove/'+customer._id).success(function(data) {
            callback(customers);
        });
    }
    return factory;
});
