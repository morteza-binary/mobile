/**
 * @name preview.header component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/23/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('field.components')
    .component('bgField', {
      templateUrl: 'js/modules/field/field.template.html',
      controller: FieldController,
      bindings: {
        ngModel: '=',
        label: '<',
        type: '<'
      }
    });


  function FieldController(){
  }
})();
