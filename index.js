//Mouse Click

var flatKey = document.querySelectorAll(".p_key");
for( var i=0;i<flatKey.length;i++){
    flatKey[i].addEventListener("click", function(){
        // alert("I am working!");
        var keyChar = this.innerHTML;
        soundClick(keyChar);
        var code = this.getAttribute("class");
        buttonPress(code[6]);
        // console.log(code[6]);

    });
}
var sharpKeys = document.querySelectorAll(".pu_key");
for(var j= 0;j<sharpKeys.length;j++){
    sharpKeys[j].addEventListener("click", function(){
        // alert("I am working too!");
        var keyChar = this.innerHTML;
        soundClick(keyChar);
        var codeS = this.getAttribute("class");
        buttonPress(codeS[11]);
    })
}

function soundClick(keyPressed) {
    switch(keyPressed){
        case "C":
            var key1 = new Audio("c_flat.wav");
            key1.play();
            break;
            case "D":
            var key2 = new Audio("d.wav");
            key2.play();
            break;
            case "E":
            var key3 = new Audio("e.wav");
            key3.play();
            break;
            case "F":
            var key4 = new Audio("f.wav");
            key4.play();
            break;
            case "G":
            var key5 = new Audio("g.wav");
            key5.play();
            break;
            case "A":
            var key6 = new Audio("a.wav");
            key6.play();
            break;
            case "B":
            var key7 = new Audio("b.wav");
            key7.play();
            break;
            case "C*":
            var key8 = new Audio("c_high.wav");
            key8.play();
            break;
            case "C#":
            var keys1 = new Audio("c_sharp.wav");
            keys1.play();
            break;
            case "D#":
            var keys2 = new Audio("d_sharp.wav");
            keys2.play();
            break;
            case "F#":
            var keys3 = new Audio("f_sharp.wav");
            keys3.play();
            break;
            case "G#":
            var keys4 = new Audio("g_sharp.wav");
            keys4.play();
            break;
            case "A#":
                var keys5 = new Audio("a_sharp.wav");
                keys5.play();
                break;            
            default:
                alert("Wrong key!");
                break;
    }
}



//Keyboard COntrol 
var flatKeyboard = document.querySelectorAll(".l");

for( var i=0;i<flatKeyboard.length;i++){
    flatKeyboard[i].addEventListener("click", function(){

        // alert("I am working!");

        var keyChar = this.innerHTML;

        soundPress(keyChar);
    });
}
var sharpKeyboard = document.querySelectorAll(".u");
for(var j= 0;j<sharpKeyboard.length;j++){
    sharpKeyboard[j].addEventListener("click", function(){
        // alert("I am working too!");
        var keyChar = this.innerHTML;
        soundPress(keyChar);
    });
}

document.addEventListener("keydown", function(event){
    // console.log(event.key.toUpperCase());
    soundPress(event.key.toUpperCase());
    buttonPress(event.key);
});


function soundPress(keyPressed) {
    switch(keyPressed){
        case "A":
            var key1 = new Audio("c_flat.wav");
            key1.play();
            break;
            case "S":
            var key2 = new Audio("d.wav");
            key2.play();
            break;
            case "D":
            var key3 = new Audio("e.wav");
            key3.play();
            break;
            case "F":
            var key4 = new Audio("f.wav");
            key4.play();
            break;
            case "G":
            var key5 = new Audio("g.wav");
            key5.play();
            break;
            case "H":
            var key6 = new Audio("a.wav");
            key6.play();
            break;
            case "J":
            var key7 = new Audio("b.wav");
            key7.play();
            break;
            case "K":
            var key8 = new Audio("c_high.wav");
            key8.play();
            break;
            case "W":
            var keys1 = new Audio("c_sharp.wav");
            keys1.play();
            break;
            case "E":
            var keys2 = new Audio("d_sharp.wav");
            keys2.play();
            break;
            case "T":
            var keys3 = new Audio("f_sharp.wav");
            keys3.play();
            break;
            case "Y":
            var keys4 = new Audio("g_sharp.wav");
            keys4.play();
            break;
            case "U":
                var keys5 = new Audio("a_sharp.wav");
                keys5.play();
                break;            
            default:
                alert("Wrong key!");
                break;
    }
}


function buttonPress(currentKey){
    var keyPressed = document.querySelectorAll("."+currentKey);
    keyPressed[0].classList.add("pressed");
    keyPressed[1].classList.add("pressed");
    
    setTimeout(function(){
        keyPressed[0].classList.remove("pressed");
        keyPressed[1].classList.remove("pressed");
    },100);
}