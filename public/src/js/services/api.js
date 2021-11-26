'use strict';

angular.module('insight.api')
  .factory('Api',
    function() {
      return {
        apiPrefix: '/falcon-insight-api'
      }
    });
