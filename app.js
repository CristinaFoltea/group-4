
var text = document.getElementById('text');
var comments = document.getElementById('comments');
var audio = document.getElementById('audio');
var audioOK = document.getElementById('audioOK');

//Styling
var body = document.getElementsByTagName('body');
body[0].style.width = '500px';
body[0].style.border='solid black 2px';


//var divList = document.getElementsByClassName('div');

var newComment = function(t) {
  if(t.length >= 144){
      audio.play();
      alert("input too long");  return "";
  }
  else {
    audioOK.play();
//    audioOK.currentTime = ".5"; <----This is where we need to shorten the audio! ------->
  }
  var a = new Date;
  return '<div>' +
      '<time>' + a.toString() + '</time>' +
      '<p>' + t + '</p>' +
    '</div>';
};

var button = document.getElementById('button');
button.addEventListener('click',function(e){
  comments.innerHTML += newComment(text.value);
  text.value="";
});
