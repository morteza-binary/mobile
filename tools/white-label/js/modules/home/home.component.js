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
    .module('home.components')
    .component('bgHome', {
      templateUrl: 'js/modules/home/home.html',
      controller: Home,
    });

  function Home(){
  }
})();

