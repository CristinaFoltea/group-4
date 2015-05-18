
var text = document.getElementById('text');

var comments = document.getElementById('comments');

var body = document.getElementsByTagName('body');
body[0].style.width = '500px';
body[0].style.border='solid black 2px';
//var divList = document.getElementsByClassName('div');

var newComment = function(t) {
  if(t.length >= 144){
      audio.play();
      alert("input too long");  return "";
  }
  var a = new Date;
  return '<div>' +
      '<time>' + a.toString() + '</time>' +
      '<p>' + t + '</p>' +
    '</div>';
};

var audio = document.getElementById('audio');

var button = document.getElementById('button');
button.addEventListener('click',function(e){
  comments.innerHTML += newComment(text.value);
  text.value="";
});

