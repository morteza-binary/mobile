/**
 * @name home component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/15/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('core.components')
    .component('bgHome', {
      templateUrl: 'statics/js/modules/core/components/home/home.html',
      controller: Home,
    });

  function Home(){
  }
})();
