prediction1 = ""



Webcam.set({
    width :350,
   height: 300,
   image_format: "png",
   png_quality:90
})


Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='result_image' src ='"+ data_url +"'>"
    })
}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/opo7MxEig/model.json", modelloaded)

function modelloaded(){
 console.log(("model has loaded"))
}




function speaking(){
    var synth = window.speechSynthesis
    speak_data1 = "The prediction is " + prediction1
    var utterthis = new SpeechSynthesisUtterance(speak_data1)
    synth.speak(utterthis)
}


function check(){
    img = document.getElementById("result_image")
    classifier.classify(img , gotresult)
}



function gotresult(error , result){

    if(error){
        console.log(error)
    }else{
        console.log(result)

        document.getElementById("result_gesture_name1").innerHTML = result[0].label
        

         prediction1 = result[0].label
   
         speaking()

         if(result[0].label == "Amazing"){
             document.getElementById("result_gesture_name").innerHTML = Amazing
         }  
         if(result[0].label == "Victory"){
            document.getElementById("result_gesture_name").innerHTML = Victory
        }  
        if(result[0].label == "Best"){
            document.getElementById("result_gesture_name").innerHTML = Best
        }    



    }
     

}
































