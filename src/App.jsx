import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {

   function handleClick(){
    alert ('button clicked')
   }
   const handleClick2 = () =>{
    alert('button 2 clicked')
   }
   const addFourth = (num)=>{
    alert(num + 2)
   }

  return (
    <>
      <h3> React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{ alert('third clicked')}}>Third</button>
      <button onClick={()=> addFourth(2)}>Fourth</button>
    
    </>
  )
}

export default App
