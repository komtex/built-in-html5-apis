window.onload = init;
function init() {
navigator.mediaDevices.getUserMedia({
  audio: false,
  video: true
  }).then(function(stream) {
         var video = document.createElement('video');
  document.body.appendChild(video);
  video.srcObject = stream;
  video.controls=true;
  //for initial value
  video.width = window.innerWidth;
  video.height = window.innerHeight;
  //for dealing with window resize
  window.onresize = function() {
    video.width = window.innerWidth;
    video.height = window.innerHeight;
  };
  video.play();
 console.log("The following error ocured:" + err);
  });
}