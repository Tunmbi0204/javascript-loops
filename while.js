let output = document.getElementById('output2');
let scores = [60, 77, 38, 19, 59, 47, 23];
let text = "";



let m = 0;
while (m < scores.length){
       m++;
    let punishment = scores[m] - 5;
    let manipulated = punishment + scores[m] / 2;
    


    console.log(punishment);

 if (punishment > 50){
  text += punishment + "- you passed wonderfully, your previous score is " + scores[m] + " after manipulation" + "<br><br>";
     output.innerHTML = text;
}

 else if (manipulated > 50){
text += manipulated + "- you escaped my punishment because of my manipulated score, your previous score is " + scores[m] + " after manipulation <br><br>";
output.innerHTML = text;
}

 else {
    text += punishment + "- you failed badly,your previous score " + scores[m] + " after manipulation <br><br> ";
    output.innerHTML =  text;
}

}