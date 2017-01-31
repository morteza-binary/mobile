/**
 * @name preview.purchase component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/27/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgPurchase', {
      templateUrl: 'js/modules/preview/components/purchase/purchase.template.html',
      controller: PurchaseController,
      bindings: {
        onClick: '&'
      }
    });

  PurchaseController.$inject = ['FileService'];

  function PurchaseController(FileService){
    var ctrl = this;

    ctrl.config = {
      name: "Purchase Properties",
      properties: {
        buttonColor: {
          name: 'Button color',
          type: 'color',
          value: FileService.getScssVar("positiveColor"),
          css: "positiveColor"
        }
      }
    };

    ctrl.click = function(){
      ctrl.onClick({config: ctrl.config});
    }
  }
})();
