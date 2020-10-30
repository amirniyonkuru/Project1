
var output = document.getElementById("output");
document.getElementById("submit").addEventListener("click", calculator);

function calculator(){
    var result = 0;
    var bill =Number(document.getElementById("billAmount").value);
    var choices = document.getElementById("choices").value;
    var sharing=Number(document.getElementById("sharingPeople").value);

    if(choices == "" || typeof(bill) !== "number" || typeof(sharing) !== "number"){
        alert("Please fill the missing fields");
        return false;
        
    }else if(choices == "excell"){
        choices = 0.3;
    }else if(choices == "good"){
        choices = 0.2;
    }else if(choices == "okay"){
        choices = 0.15;
    }
    else if(choices == "bad"){
        choices = 0.1;
    }else if(choices == "terrible"){
        choices = 0.05;
    }else{

    }
    var result = (bill * choices) / sharing;
    output.innerHTML = "TIP AMOUNT <br>" + "$ " + result + "<br>" + "each";
    console.log(bill , choices, sharing);

}