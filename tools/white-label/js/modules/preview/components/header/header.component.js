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
    .module('preview.components')
    .component('bgPreviewHeader', {
      templateUrl: 'js/modules/preview/components/header/header.template.html',
      controller: HeaderController,
      bindings: {
        onClick: '&'
      }
    });

  HeaderController.$inject = ['FileService'];

  function HeaderController(FileService){
    var ctrl = this;

    ctrl.config = {
      name: "Header Properties",
      properties:{
        logo: {
          name: "Logo",
          type: "img",
          value: "../../www/img/binary_logo_light.svg",
          default: "../../www/img/binary_logo_light.svg"
        },
        backgroundColor: {
          name: "Background color",
          type: "color",
          value: FileService.getScssVar("primaryBrandColor"),
          css: "primaryBrandColor",
        },
        bottomBorderColor: {
          name: "Bottom border color",
          type: "color",
          value: FileService.getScssVar("secondaryBrandColor"),
          css: "secondaryBrandColor"
        }
      }
    };

    ctrl.onClick({config: ctrl.config});

    ctrl.click = function(){
      ctrl.onClick({config: ctrl.config});
    };
  }
})();
