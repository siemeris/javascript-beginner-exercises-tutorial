let str= "";
let lyric1 = "let it be, ";
let lyric2 = "whisper words of wisdom, ";
let lyric3 = "there will be an answer, ";
let lyric4 = "let it be" 

function sing(){
    for (var i=1; i<=12; i++){
        if (i!=5 && i!=11 & i!=12){
            str += lyric1;
            //console.log("let it be,");
        }
        else if (i==5) { 
            str += lyric2;
            //console.log("whisper words of wisdom, ");
        }
        else if (i==11){
            str += lyric3;
            //console.log("there will be an answer,");
        }
        else if (i==12){
            str += lyric4;
            //console.log("there will be an answer,");
        }
    }
    return str
}

//Your code above ^^^

console.log(sing());