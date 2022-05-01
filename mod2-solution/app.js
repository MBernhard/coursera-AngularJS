(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.Items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.bought = function (boughtIndex) {
    ShoppingListCheckOffService.bought(boughtIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.Items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {name: 'cookies', quantity: '10'},
    {name: 'chips', quantity: '3'},
    {name: 'red wine', quantity: '1'},
    {name: 'haribo', quantity: '4'},
    {name: 'nuskati', quantity: '2'},
    {name: 'bananas', quantity: '1kg'}
  ];
  var boughtItems = [];

  service.bought = function (toBuyIndex) {
    var item = toBuyItems.at(toBuyIndex);
    toBuyItems.splice(toBuyIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return boughtItems;
  };
}

})();
