angular.module("app").config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/pages/top.html",
      controller: "TopCtrl",
      controllerAs: "$ctrl"
    })
    .when("/add", {
      templateUrl: "app/pages/addBook.html",
      controller: "AddBookCtrl",
      controllerAs: "$ctrl"
    })
    .otherwise({ redirectTo: "/" });
});