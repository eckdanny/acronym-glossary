(function (window, angular, undefined) { 'use strict';
  
  angular.module('de.terms', [])
  .factory('termsFactory', termsFactory);

  function termsFactory ($http, $q) {

    var _data;

    return {
      all: all
    };

    function all () {
      return $http.get('/data/terms.json')
      .then(
        function success (res) {
          return _data = res.data;
        },
        function error (res) {
          return $q.reject(res);
        }
      );
    }
  }

})(window, window.angular);