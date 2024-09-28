/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/




const paragraph = document.getElementById("khusboo") ;  
const words = paragraph.innerHTML.trim().split(/\s+/).filter(wordsss =>wordsss.length > 0); 
const countWord = words.length ; 
//  Display now 
const displaying =  document.createElement("p") ; 
displaying.innerHTML = `Words count is now : ${countWord}` ; 
//  Put it next to the heading 
const heading = document.querySelector("h1") ; 
heading.insertAdjacentElement("afterend", displaying) ;

