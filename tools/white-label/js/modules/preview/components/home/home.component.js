/**
 * @name home component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/29/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgMain', {
      templateUrl: 'js/modules/preview/components/home/home.template.html',
      controller: HomeController,
      bindings: {
        onClick: '&'
      }
    });

  function HomeController(){
    var ctrl = this;

    ctrl.config = {
      name: 'Home Properties',
      properties: {
        logo: {
          name: 'Logo',
          type: 'img',
          value: '../../www/img/logomark.svg',
          default: '../../www/img/logomark.svg'
        },
        slogan: {
          name: 'Slogan',
          type: 'img',
          value: '../../www/img/logotype_dark.svg',
          default: '../../www/img/logotype_dark.svg'
        }
      }
    };

    ctrl.onClick({config: ctrl.config});

    this.click = function(){
      ctrl.onClick({config: ctrl.config});
    };
  }
})();
