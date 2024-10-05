import {useState} from 'react' ; 
const  Counter = () =>{
    let [counter, setCounter] = useState(0) ; 
    
    // increase count 
    const increaseCount = () =>{
        // setCounter(counter + 1) ; 
        //  For counting a bunch of blocks 
        setCounter(prevCounter => prevCounter + 1 ) ;
        setCounter(prevCounter => prevCounter + 1 ) ;
        setCounter(prevCounter => prevCounter + 1 ) ;
        setCounter(prevCounter => prevCounter + 1 ) ;


    }

    //  Decrease count 
    const decrement = () =>{
        if(counter>0){
            setCounter(counter-1) ; 
        }
    }
    

    return <div>
    <h1> Counter : {counter}</h1>
       <button onClick={increaseCount} className='p-4 m-4 bg-blue-800 '>
       Count</button>  
       <button onClick={decrement} className='p-4 m-4 bg-orange-500 '>
       Count</button>  
    </div>
}
export default Counter ; 