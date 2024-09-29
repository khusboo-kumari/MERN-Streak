const shine = document.querySelectorAll(".stars i") ; 
const container = document.querySelector('.container') ;

shine.forEach((star, index)=>{
    star.addEventListener('click', ()=>{
        //  Loop through all the stars to put color now 
        shine.forEach((s, count)=>{
            if(count <= index){
                s.style.color = "gold"  ;   
            }else{
                s.style.color = "gray" ;   
            }
        }); 

        //  Remove any existing rating before adding a new one 
        const existingComment = document.querySelector('.rating-comment') ;
        if (existingComment) {
            existingComment.remove() ; 
        }

        const comment = document.createElement('p') ;
        comment.innerHTML = `Rating : ${index+1} stars` ;
        comment.classList.add('rating-comment') ;

        container.appendChild(comment) ;
    })
})  