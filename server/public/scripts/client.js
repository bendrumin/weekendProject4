console.log('JS Sourced');
var myApp = angular.module('myApp', []);  //Will leave empty for now

myApp.controller('WelcomeController', function(){

  var welcome = this;
  welcome.message = 'Hello, welcome to my life';
  welcome.photos = [];
  createphotos();

  welcome.incrementLike = function(index){
   welcome.photos[index].likes += 1;
 };

  welcome.toggleShow = function(index){
    welcome.photos[index].visible = !welcome.photos[index].visible;
  };



  function createphotos(){
    welcome.photos[0] = {
      pic: "/images/image - 1.jpg",
      desc: "This is a photo of my nephews Morgan and Toby who live in Arizona with my sister",
      likes: 0,
      visible: true,
    };
    welcome.photos[1] = {
      pic: "/images/image - 2.jpg",
      desc: "This is the first selfie ever taken of my Fiance and I when we first met... We have taken a lot more since then",
      likes: 0,
      visible: true,
    };
    welcome.photos[2] = {
      pic: "/images/image - 3.jpg",
      desc: "My mom, Shes was/is still pretty awesome.  I wish you guys could have met her at the potluck",
      likes: 0,
      visible: true,
    };
    welcome.photos[3] = {
      pic: "/images/image - 4.jpg",
      desc: "My mom and my best friend surprised me with a birthday party last year, it was kinda awesome",
      likes: 0,
      visible: true,
    };
    welcome.photos[4] = {
      pic: "/images/image - 5.jpg",
      desc: "I took a trip with my best friend to San Fran. It was a blast even though we got lost in Muir Woods",
      likes: 0,
      visible: true,
    };
    welcome.photos[5] = {
      pic: "/images/image - 6.jpg",
      desc: "This is a photo from the night I proposed to Shari, She didnt know I made this face and now its on your website.",
      likes: 0,
      visible: true,
    };
  }

});
