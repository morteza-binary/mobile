/**
 * @name file service
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/30/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary.share.services')
    .factory('FileService', FileService);


  function FileService(){
    var fs = require('fs');

    const COLOR_FILE_PATH = '../../scss/core/_variables.scss';
    const APP_CONFIG_PATH = '../../www/js/configs/app.config.js';

    var factory = {};

      function readFile(filePath){
        var data = null;
        data = fs.readFileSync(filePath,'utf-8');
        return data.toString();
      }

      function parseScssVal(cssContent, varName, returnTotal){
        var reg = new RegExp(varName + '\\s*:\\s*(#\\w+);')
        var result = reg.exec(cssContent);

        if(result && result[1]){
          if(returnTotal){
            return result[0];
          }
          return result[1];
        }
        return null;
      }

      function parseJsFile(jsContent, varName, returnTotal){
        var reg = new RegExp("['|\"]{0,1}" + varName + "['|\"]{0,1}\\s*:\\s*['|\"]{0,1}(.+)['|\"]{0,1},");
        var result = reg.exec(jsContent);

        if(result && result[1]){
          if(returnTotal){
            return result[0];
          }
          if(result[1] != 'null'){
           return result[1].replace(/['|"]/, "");
          }
        }

        return null;
      }

    factory.getScssVar = function (name){
      var cssContent = readFile(COLOR_FILE_PATH);
      if(cssContent){
        return parseScssVal(cssContent, name);
      }
      return null;

    }

    factory.saveScssProperties = function(properties){
      var cssContent = readFile(COLOR_FILE_PATH);
      if(cssContent && properties){
        angular.forEach(properties, function(value, key){
          if(value.css){
            var current = parseScssVal(cssContent, value.css, true);
            cssContent = cssContent.replace(current, value.css + ': ' + value.value + ';');
          }
        });
        fs.writeFileSync(COLOR_FILE_PATH, cssContent);
      }

    }

    factory.saveImages = function(properties){
      angular.forEach(properties, function(value, key){
        if(value.type == 'img'){
          var data = fs.readFileSync(value.value);
          fs.writeFileSync(value.default, data);
        }
      });
    }

    factory.getConfigVar = function(name){
      var jsContent = readFile(APP_CONFIG_PATH);

      if(jsContent){
        return parseJsFile(jsContent, name);
      }

      return null;
    };

    factory.saveConfigs = function(configs){
      var jsContent = readFile(APP_CONFIG_PATH);
      if(jsContent && configs){
        angular.forEach(configs, function(value, key){
          var current = parseJsFile(jsContent, value.symbol, true);
          jsContent = jsContent.replace(current, "'" + value.symbol + "': '" + value.value + "',");
        });
        fs.writeFileSync(APP_CONFIG_PATH, jsContent);
      }
    }

    return factory;
  }
})();
