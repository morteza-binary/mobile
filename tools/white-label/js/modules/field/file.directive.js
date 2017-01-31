/**
 * @name file directive
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/26/2017
 * @copyright Binary Ltd
 */

(function(){
  'use strict';
  angular
    .module('field.directives')
    .directive('bgFile', File);

  File.$inject = ['$q'];

  function File($q){
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                    var element = e.target;

                    if(element.files.length > 0){
                      ngModel.$setViewValue(element.files[0].path);
                    }

                    /*$q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        };
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }*/

                }); //change

            } //link
    };
  }
})();
