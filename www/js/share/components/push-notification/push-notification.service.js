/**
 * @name Push Notification Service
 * @author Morteza Tavanarad
 * @contributors []
 * @since 03/04/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary.share.components.push-notification.services')
    .factory('pushNotificationService', PushNotification);

  PushNotification.$inject = ['$rootScope', '$ionicPlatform', 'config']

  function PushNotification($rootScope, $ionicPlatform, config){
    var factory = {};

    $ionicPlatform.ready(function(){
      if(window.cordova){
        factory.pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");
      }
    });

    factory.init = function(){
      document
        .addEventListener('push-notification', handleNotification);

      factory.pushwoosh.onDeviceReady({
        appid: config.pushNotificationAppId,
        projectid: config.googleCloudMessagingId
      });

    };

    factory.register = function(){
      if(factory.pushwoosh){
        factory.pushwoosh.registerDevice((status)=> {
          factory.token = status.pushToken;
          console.log("Register to pushwoosh successfully");
        },
        (status) => {
          console.log("Faild to register to pushwoosh");
          console.log(status);
        }
        );
      }
    };

    factory.setTag = function(tag){
      if(factory.pushwoosh){
        factory.pushwoosh.setTags(tag,
            (status) => { console.log('Tag registered successfully'); },
            (status) => { console.log('Failed to register the tag'); }
            );
      }
    }

    function handleNotification(message){
      console.log(message);
      $rootScope.$broadcast('push-notification:new-message', message)
    }

    return factory;
  }
})();
