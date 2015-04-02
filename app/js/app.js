'use strict';

// Declare app level module which depends on filters, and services
angular.module('cratewise',
      ['cratewise.config', 'cratewise.routes', 'cratewise.filters', 'cratewise.services', 'cratewise.directives', 'cratewise.controllers',
         'simpleLoginTools', 'routeSecurity', 'ngFlowGrid']
   )

   .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
         // establish authentication
         $rootScope.auth = loginService.init('/login');
         $rootScope.FBURL = FBURL;
   }]);