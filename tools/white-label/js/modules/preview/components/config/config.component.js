/**
 * @name preview.config component
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/31/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('preview.components')
    .component('bgConfig', {
      controller: ConfigController,
      temlapte: "",
      bindings: {
        onClick: '&'
      }
    });

  ConfigController.$inject = ['FileService'];

  function ConfigController(FileService){
    var ctrl = this;

    ctrl.config = {
      name: 'Endpoint Configs',
      type: 'config',
      properties: {
        app_id: {
          name: 'Application ID',
          value: FileService.getConfigVar('app_id'),
          default: '10',
          symbol: 'app_id',
          type: "text"
        },
        wsUrl: {
          name: 'Websocket URL',
          value: FileService.getConfigVar('wsUrl'),
          default: 'wss://ws.binaryws.com/websockets/v3',
          symbol: 'wsUrl',
          type: "text"
        },
        oauthUrl: {
          name: 'OAuth URL',
          value: FileService.getConfigVar('oauthUrl'),
          default: 'https://oauth.binary.com/oauth2/authorize',
          symbol: 'oauthUrl',
          type: "text"
        },
        brand: {
          name: 'Brand',
          value: FileService.getConfigVar('brand'),
          default: null,
          symbol: 'brand',
          type: "text"
        }
      }
    };

    ctrl.onClick({config: ctrl.config});

  }
})();
