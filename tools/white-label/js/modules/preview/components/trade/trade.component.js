/**
 * @name preview.trade component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/27/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgTrade', {
      templateUrl: 'js/modules/preview/components/trade/trade.template.html',
      controller: TradeController,
      bindings: {
        onClick: '&'
      }
    });

  function TradeController(){
    var ctrl = this;

    ctrl.click = function(config){
      ctrl.onClick({config: config});
    }
  }
})();
