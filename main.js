var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak(){
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}