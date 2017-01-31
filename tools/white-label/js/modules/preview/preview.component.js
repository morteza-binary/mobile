/**
 * @name preview component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/23/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgPreview', {
      templateUrl: 'js/modules/preview/preview.template.html',
      controller: PreviewController
    });

  PreviewController.$inject = [];

  function PreviewController(){
    var ctrl = this;
    ctrl.config = null;
    ctrl.layout = 'home';

    ctrl.click = function(config){
      ctrl.config = config;
    }

    ctrl.changeView = function(layout){
      if(layout != ctrl.layout){
        ctrl.config = null;
        ctrl.layout = layout;
      }
    }
  }
})();
