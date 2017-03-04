'use strict';
angular.module('pigLatinApp')
  .controller('PigLatinInputContrller', [
    'TranslatorService',
    function PigLatinInputController(TranslatorService) {
      var ctrl = this;
      
      ctrl.englishInput = null;

      ctrl.translate = translate;

      function translate() {
        if (ctrl.englishInput) {
          TranslatorService.translate(ctrl.englishInput);
        }
      }
  }]);

