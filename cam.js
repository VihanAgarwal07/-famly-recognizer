Webcam.set({
    height:350,
    width:350,
    image_format:"png",
    png_quality:99.9
    });
    camera=document.getElementById("camera")
    Webcam.attach(camera);
    function snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("person_img").src=data_uri
        });
    }
    console.log("ml5 version:",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A31wBUWev/model.json",uploadCheck)
  function uploadCheck(){
    console.log("teachable Machine uploaded");
  }
  function check(){
    image=document.getElementById("person_img");
    classifier.classify(image,gotResult)
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("person_image").innerHTML=results[0].label;
    }
}

