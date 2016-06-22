// Product Factory
myApp.factory('ProductFactory', function($http) {
    var factory = {};
    var products = [];

    // Grab all Products
    factory.index = function(callback) {
        $http.get('/getProducts').success(function(data) {
            products = data.Products;
            callback(products);
        });
    };

    // Update quantity on products
    factory.updateProduct = function(productInfo, callback){
        $http.post('/product/'+productInfo.product+'/'+productInfo.quantity, productInfo).success(function(data) {
            callback(data);

        });
    };

    // Create product
    factory.create = function(productInfo, callback) {
        $http.post('/newProduct', productInfo).success(function(data) {
            callback(data);
        });
    };

    return factory;
});
