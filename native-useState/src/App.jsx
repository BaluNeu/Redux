 import { useState } from 'react'

// function namesList(){

//   const [list, setList] = useState('balu', 'allu', 'ollu');

//   return (

//     <div>
//       <ul>
//         {list.map((name) => (<li key = {name}>{name}</li>))}

//       </ul>
//     </div>
//   )
// }

// function Counter(props) {
//   const [count, setCount] = useState(0);

//   function addOne() {
//     //console.log();
//     setCount(count + 1)

//   }
  
  
//   return (
    
//     <div className="App">
//       {props.x}
//       <button onClick = {addOne}>
        
//         Count = {count}
      
//       </button>
      
//     </div>
//   )
// }
import StatusChangeHandler from './components/status';
//import changeStatus from './components/status/StatusChangeHandler';




function App(props) {

  const[status, setStatus] = useState("Single");

    const changeStatus = () => {
        setStatus("Married")
      }
  
  return (
      <div className="App">

       <StatusChangeHandler changeStatus = {status}/>

       {/* <button onClick={changeStatus}> statusUpdate</button> */}

       <div>

       <button onClick={() => changeStatus()}> statusUpdate</button>
       </div>

       
      </div>
    )

}

export default App
