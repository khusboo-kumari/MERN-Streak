// //  Select The Paragraph Element
// const paragraph = document.getElementById("APJ");

// //  Get the Paragraph Content
// const words = paragraph.innerHTML.split(" ");
// // Loop through each word and highligt with more than 8 characters
// const highLight = words.map((eachWord) => {
//   if (eachWord.length > 8) {
//     return `<span style="background-color: yellow">${eachWord}</span>`;
//   }
//   return eachWord;
// });
// //  Replace the paragraph content with the highlighted text
// paragraph.innerHTML = highLight.join(" ");



const paragraph = document.getElementById("APJ") ; 

const words = paragraph.innerHTML.split(" ") ;  

const highLight = words.map((eachWord)=>{
  if(eachWord.length > 8){
    return `<span style="background-color : yellow ">${eachWord}</span>`
  }
  return eachWord ; 
});

paragraph.innerHTML = highLight.join(" ") ;  