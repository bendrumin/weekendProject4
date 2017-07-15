console.log('JS Sourced');
var myApp = angular.module('myApp', []);  //Will leave empty for now

myApp.controller('WelcomeController', function(){

  var welcome = this;
  welcome.message = 'Hello, welcome to my life';

  welcome.names = ['images/imageOne.jpg',
  'images/imageTwo.jpg',
  'images/imageThree.jpg',
  'images/imageFour.jpg',
  'images/imageFive.jpg',
  'images/imageSix.jpg'];

});
