/**
 * @name TickTradeWhitelable app
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/15/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary', [
        'pascalprecht.translate',
        'ui.router',
        'binary.modules'
    ]);

  angular
    .module('binary.modules', [
        'binary.modules.core'
    ]);
})();
