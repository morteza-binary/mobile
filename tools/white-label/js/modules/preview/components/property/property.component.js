/**
 * @name property component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/25/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgPreviewProperty', {
      templateUrl: 'js/modules/preview/components/property/property.template.html',
      controller: PropertyController,
      bindings: {
        data: '=',
        onUpdate: '&'
      }
    });

  PropertyController.$inject = ['FileService'];

  function PropertyController(FileService){
    var ctrl = this;
    ctrl.disableSaveButton = false;

    ctrl.saveProperties = function(){
      ctrl.disableSaveButton = true;
      if(ctrl.data.type != 'config'){
        FileService.saveScssProperties(ctrl.data.properties);
        FileService.saveImages(ctrl.data.properties);
      }
      else {
        FileService.saveConfigs(ctrl.data.properties);
      }
      ctrl.disableSaveButton = false;
    }
  }

})();
