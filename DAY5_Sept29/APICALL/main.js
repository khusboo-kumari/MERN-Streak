//   Fetch using XML

const listContainer = document.querySelector(".listContainer");

//   function fetchApiXHR(){
//         const xhr = new XMLHttpRequest() ;
//         xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts') ;  
//         //  Now mention the Response Type  json
//         xhr.responseType = 'json' ;

//         //  Now after the response, we have to Send
//         xhr.send() ;

//         xhr.onload = () =>{
//             if(xhr.status === 200){
//                 console.log(xhr) ;
//                 displayResults(xhr.response) ;
//             }else{
//                 console.log("Error occured ") ;
//             }
//         }
//   }



// fetchApiXHR()  ;

//  Fetch using Fetch Method
// function fetchApi() {
//   const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });
//   fetchRequest
//     .then((response) => response.json())
//     .then((result) => displayResults(result))
//     .catch((err) => console.log(err));
// }
// fetchApi() ;

//  Ftch using  Async Await 
async function fetchAsync(){
    const fetching  = await fetch("https://jsonplaceholder.typicode.com/posts", {method :'GET',

    }) ;
    const result =  await fetching.json() ;
    displayResults(result) ;
}
fetchAsync() ; 

//  Function Display Result
function displayResults(posts) {
  listContainer.innerHTML = posts
    .map((postItem) => {
      return `<div class="post-item">
        <h2>${postItem.title}</h2>
        <p>${postItem.body}</p>
      </div>`;
    })
    .join("");
}
