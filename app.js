function getData(){
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb= document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;
 
    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person, place, adj)
   
}
 
function sentences(verb, adverb, person, place, adj){
    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle of it, ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt behind, while crying ${adverb}.`, `its been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screemed "This strawberry is ${adj}!! we thought ${person} went crazy!`]
ranN = Math.floor(Math.random() * sentenceArray.length)
 
return sentenceArray[ranN];
}





var wordarr = [
    {
        word: "dog", 
        hint: "company you keep at home"
    },
    {
        word: "place",
        hint: "somewhere you are at in any moment "
    },
    {
        word: "tree",
        hint: "it grows from the ground"

    },
    {
        word: "computer",
        hint: "you are using it now"
    }
]

rN = Math.floor(Math.random() * wordarr.length)

var word = wordarr[rN].word;
var hint = wordarr[rN].hint;

var correct = []
var counter = word.length + 2;
document.getElementById("wrong").innerHTML = counter

document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;

var splitword = word.split("")
var emptysplitword = []

for(i = 0; i < splitword.length; i++){
    emptysplitword[i] = "_"
    document.getElementById("word").innerHTML = emptysplitword.join(" ")
}







function enterletter(){
    var letter = document.getElementById("letter").value;
    for( x = 0; x < splitword.length; x++) {
        if(letter == splitword[x]){
            emptysplitword[x] = letter;
            document.getElementById("word").innerHTML = emptysplitword.join(" ");
            document.getElementById("letter").value = ""
            correct.push(1);
        }else{
            document.getElementById("letter").value = ""
        }
    }


if (correct.length == emptysplitword.length){
    alert("you got the word!")
} else if (counter > 1){
    counter -= 1
    document.getElementById("wrong").innerHTML = counter
}else if (counter <= 1){
    alert("you lost!")
    
}

}






