/**
 * @name preview.signin component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/29/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgSignin', {
      templateUrl: 'js/modules/preview/components/signin/signin.template.html',
      controller: SigninController,
      bindings: {
        onClick: '&'
      }
    });

  SigninController.$inject = ['FileService'];

  function SigninController(FileService){
    var ctrl = this;
    ctrl.config = {
      name: 'Signin Properties',
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
        },
        buttonColor: {
          name: 'Button color',
          type: 'color',
          value: FileService.getScssVar("positiveColor"),
          css: "positiveColor"
        }
      }
    };

    ctrl.onClick({config: ctrl.config});

    ctrl.click = function(){
      ctrl.onClick({config: ctrl.config});
    };
  }
})();
