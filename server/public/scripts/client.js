console.log('JS Sourced');
var myApp = angular.module('myApp', []);  //Will leave empty for now

myApp.controller('WelcomeController', function(){
  var gallery = this;


 // Old toggle, works but messy
 // welcome.toggleShow = function(index){
 //   welcome.photos[index].visible = !welcome.photos[index].visible;
 //   console.log(welcome.photos[index].visible);
 // };

 gallery.toggle = function(picture) {
  console.log(picture);
  picture.visible = !picture.visible;
};

    gallery.pictures = [
    {
      url: "/images/image - 1.jpg",
      description: "This is a photo of my nephews Morgan and Toby who live in Arizona with my sister",
      likes: 0,
      visible: true,
    },
    {
      url: "/images/image - 2.jpg",
      description: "This is the first selfie ever taken of my Fiance and I when we first met... We have taken a lot more since then",
      likes: 0,
      visible: true,
    },
    {
      url: "/images/image - 3.jpg",
      description: "My mom, Shes was/is still pretty awesome.  I wish you guys could have met her at the potluck",
      likes: 0,
      visible: true,
    },
    {
      url: "/images/image - 4.jpg",
      description: "My mom and my best friend surprised me with a birthday party last year, it was kinda awesome",
      likes: 0,
      visible: true,
    },
    {
      url: "/images/image - 5.jpg",
      description: "I took a trip with my best friend to San Fran. It was a blast even though we got lost in Muir Woods",
      likes: 0,
      visible: true,
    },
    {
      url: "/images/image - 6.jpg",
      description: "This is a photo from the night I proposed to Shari, She didnt know I made this face and now its on your website.",
      likes: 0,
      visible: true,
    },
  ];
  gallery.likes = function(pictures) {
    pictures.likes += 1;
  };
});
