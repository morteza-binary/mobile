/**
 * @name core module
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/15/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary.modules.core', [
      'core.components',
      'core.services'
  ]);

  angular
    .module('core.components', []);

  angular
    .module('core.services', []);
})();
