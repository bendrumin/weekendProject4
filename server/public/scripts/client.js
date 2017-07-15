console.log('JS Sourced');
var myApp = angular.module('myApp', []);  //Will leave empty for now

myApp.controller('WelcomeController', function(){

  var welcome = this;
  welcome.message = 'Hello, welcome to my life';
  welcome.photos = [];
  createphotos();

  welcome.toggleShow = function(index){
    welcome.photos[index].visible = !welcome.photos[index].visible;
    console.log(welcome.photos[index].visible);
  };

  welcome.toggleComments= function(index){
    welcome.photos[index].commentsVisible = !welcome.photos[index].commentsVisible;
    console.log(welcome.photos[index].visible);
  };

  function createphotos(){
    welcome.photos[0] = {
      pic: "/images/imageOne.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
    welcome.photos[1] = {
      pic: "images/imageTwo.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
    welcome.photos[2] = {
      pic: "images/imageThree.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
    welcome.photos[3] = {
      pic: "images/imageFour.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
    welcome.photos[4] = {
      pic: "images/imageFive.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
    welcome.photos[5] = {
      pic: "images/imageSix.jpg",
      desc: "Photo description",
      likes: 0,
      visible: true,
    };
  }

});
