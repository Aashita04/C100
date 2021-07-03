var SpeechRecognition=window.webkitSpeechRecognition;

var recognize=new SpeechRecognition();

function start(){
   document.getElementById("textbox").innerHTML="";
   recognize.start();
}

recognize.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        console.log("taking your selfie")
        speak();
    }
 

}

function speak(){
    var synth= window.speechSynthesis;
    var speak="Taking your selfie in 5 seconds" ;
    var utterthis=new SpeechSynthesisUtterance(speak);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snap();
        save();
    },5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
  });
  
  var camera= document.getElementById("camera");

  function take_snap(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
      });
  }

  function save(){
      var link=document.getElementById("link");
      var img= document.getElementById("selfie").src;
      link.href=img;
      link.click();

  }
