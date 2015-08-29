
var cordova = require('cordova');

function Reverse(){

  this.doIt = function(str, successCallback, errorCallback){
    successCallback = successCallback || function(){};
    errorCallback = errorCallback || function(){};
    cordova.exec(successCallback, errorCallback, "Reverse","doIt",[str]);
  };
}

 module.exports = new Reverse();
