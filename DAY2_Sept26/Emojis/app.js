
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

const paragraph = document.getElementById("khusboo") ; 
const words = paragraph.innerHTML.split("") ; 

const updatedCharacters = words.map(char =>{ 
    if(char === '?'){
        return '🤔' ;
    }else if(char==="!"){
        return '😯' ;
    }else{
        return char ; 
    }
})

const newText = updatedCharacters.join("") ;  
paragraph.innerHTML = newText ;