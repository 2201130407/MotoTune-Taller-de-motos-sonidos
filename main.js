function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/97ZK40Pjv/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición " + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('AMORTIGUADOR')
        img2=document.getElementById('MOTOR')
        img3=document.getElementById('CADENA')
        img4=document.getElementById('ESCAPE')
        img5=document.getElementById('LLANTA')
        img6=document.getElementById('FRENOS')

        if(results[0].label=="Amortiguador"){
            img.src='Amortiguadores.gif';
            img2.src= 'MOTO_1.png';
            img3.src= 'CADENA_1.png';
            img4.src= 'ESCAPE_1.png';
            img5.src= 'LLANTA_1.png';
            img6.src= 'FRENOS_1.png';
        }else if(results[0].label=="Motor"){
            img.src='AMORTIGUADOR_1.png';
            img2.src= 'Motor.gif';
            img3.src= 'CADENA_1.png';
            img4.src= 'ESCAPE_1.png';
            img5.src= 'LLANTA_1.png';
            img6.src= 'FRENOS_1.png';
        }else if(results[0].label=="Cadena"){
            img.src='AMORTIGUADOR_1.png';
            img2.src= 'MOTO_1.png';
            img3.src= 'Cadena.gif';
            img4.src= 'ESCAPE_1.png';
            img5.src= 'LLANTA_1.png';
            img6.src= 'FRENOS_1.png';
        }else if(results[0].label=="Escape"){
            img.src='AMORTIGUADOR_1.png';
            img2.src= 'MOTO_1.png';
            img3.src= 'CADENA_1.png';
            img4.src= 'Escape.gif';
            img5.src= 'LLANTA_1.png';
            img6.src= 'FRENOS_1.png';
        }else if(results[0].label=="Llanta"){
            img.src='AMORTIGUADOR_1.png';
            img2.src= 'MOTO_1.png';
            img3.src= 'CADENA_1.png';
            img4.src= 'ESCAPE_1.png';
            img5.src= 'Ruedas.gif';
            img6.src= 'FRENOS_1.png';
        }else {
            img.src='AMORTIGUADOR_1.png';
            img2.src= 'MOTO_1.png';
            img3.src= 'CADENA_1.png';
            img4.src= 'ESCAPE_1.png';
            img5.src= 'LLANTA_1.png';
            img6.src= 'Frenos.gif';
        }

    }
}