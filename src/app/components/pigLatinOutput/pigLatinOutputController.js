'use strict';
angular.module('pigLatinApp')
  .controller('PigLatinOutputContrller', [
    'TranslatorService',
    function PigLatinOutputController(TranslatorService) {
      var ctrl = this;
      
      ctrl.pigLatinPhraseList = TranslatorService.pigLatinArray;
      ctrl.englishPhraseList = TranslatorService.englishArray;

  }]);

