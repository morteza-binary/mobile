/**
 * @name TickTrade Whitelabel App
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/23/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary', [
        'ionic',
        'pascalprecht.translate',
        'ui.router',
        'binary.modules',
        'binary.share.services'
    ]);

  angular
    .module('binary.modules', [
        'binary.modules.home',
        'binary.modules.preview',
        'binary.modules.field'
    ]);

  angular
    .module('binary.share.services', []);
})();
