'use strict';

angular.module('pigLatinApp')
  .service('TranslatorService', [
    function TranslatorService() {

      var svc = this;

      const VOWELS = ['A', 'E', 'I', 'O', 'U'];
      const MAX_LENGTH = 10;

      svc.englishArray = [];
      svc.pigLatinArray = [];
      svc.translate = translate;

      function translate(englishWords) {
        var englishWordsAsArray;
        var translatedWordsArray = [];
        var translatedWords;

        addToArray(svc.englishArray, englishWords);
        englishWordsAsArray = englishWords.split(/\s+/);

        englishWordsAsArray.forEach(function forEachWord(word) {
          if (isVowel(word[0])) {
            translatedWordsArray.push(translateVowelWordToLatin(word));
          } else {
            translatedWordsArray.push(translateConsonantWordToLatin(word));
          }
        });
        
        translatedWords = translatedWordsArray.join(' ');
        addToArray(svc.pigLatinArray, translatedWords);
        return translatedWords;
      }

      function addToArray(list, word) {
        list.push(word);
        if (list.length > MAX_LENGTH) {
          list.splice(0, 1);
        }
      }

      function translateVowelWordToLatin(englishWord) {
        return englishWord + 'way';
      }

      function translateConsonantWordToLatin(englishWord) {
        var latinWord = angular.copy(englishWord);
        var leadingConsonants;
        var i = 0;

        for (i = 0; i < englishWord.length; i++) {
          if (isVowel(englishWord[i])) {
            leadingConsonants = englishWord.substring(0, i);
            latinWord = englishWord.substring(i, englishWord.length);
            latinWord = latinWord + leadingConsonants;
            break;
          }
        }
        return latinWord + 'ay';
      }

      function isVowel(letter) {
        var foundVowel = false;
        VOWELS.forEach(function (vowel) {
          if (letter.toUpperCase() === vowel) {
            foundVowel = true;
          }
        });
        return foundVowel;
      }
    }]);

