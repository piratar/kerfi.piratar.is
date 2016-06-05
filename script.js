var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  $scope.websites = [
    { 
      url: "https://x.piratar.is",
      name: "Kosningakerfi"
    },
    {
      url: "http://discourse.piratar.is",
      name: "Málefnaspjall"
    },
    { 
      url: "http://gogn.piratar.is",
      name: "Mæting þingmanna á nefndarfundi"
    },
    { 
      url: "http://www.piratar.is/althingisrynirinn/",
      name: "Alþingisrýnir (2013)"
    },
    { 
      url: "https://www.ventill.is/",
      name: "Öryggisventill"
    },
    {
      url: "http://kvika.piratar.is/",
      name: "Kvika - Wiki vefur, inniheldur að mestu vinnuskjöl"
    },
    { 
      url: "http://blog.piratar.is/",
      name: "Blogsíður Pírata"
    }
  ];
})
