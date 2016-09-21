myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/dashboard', {
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/products', {
        templateUrl: 'static/partials/products.html'
    })
    .when('/orders', {
        templateUrl: 'static/partials/orders.html'
    })
    .when('/customers', {
        templateUrl: 'static/partials/customers.html'
    })
});
