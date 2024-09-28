const generateRAndomColor = () =>{
    const r = Math.floor(Math.random() * 256) ; 
    const g = Math.floor(Math.random() * 256) ; 
    const b = Math.floor(Math.random() * 256 ) ; 
    return `rgb(${r}, ${g}, ${b})` ;
}

const bulbing = document.querySelector('.bulb') ; 
const tablet   = document.getElementById('epicentre') ; 

tablet.addEventListener('click',  ()=>{
    const randomColor = generateRAndomColor() ;  
    bulbing.style.background = randomColor ; 
})