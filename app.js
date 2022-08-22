function getData(){
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb= document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;
  
    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person, place, adj)
    
}

function sentences(verb, adverb, person, place, adj){
    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle of it, ${person} came right in the middle with this ${adj} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt behind, while crying ${adverb}.`, `its been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} decided to ${verb} in ${place}. What some people said was that ${person} screemed "This strawberry is ${adj}!! we thought ${person} wnet crazy!`]
ranN = Math.floor(Math.random() * sentenceArray.length)

return sentenceArray(ranN)
}
