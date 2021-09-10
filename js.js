//https://teachablemachine.withgoogle.com/models/P0jI-mpwQ/model.json
function voice_start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/P0jI-mpwQ/model.json",modelReady)
}
function modelReady(){
    console.log("model is ready!")
    classifier.classify(gotResult)
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }else{
console.log(result);
document.getElementById("person_name").innerHTML= result[0].label;
        }
    }

