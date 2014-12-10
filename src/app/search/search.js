(function (window, angular, undefined) { 'use strict';
  
  angular.module('de.search', ['de.terms'])
  .controller('searchController', searchController);

  function searchController (termsFactory) {
    var self = this;
    termsFactory.all().then(
      function (terms) {
        self.terms = terms;
      },
      function (reason) {
        console.log(reason);
        alert('oh no!');
      }
    );
  }

})(window, window.angular);