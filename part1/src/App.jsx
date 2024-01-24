
import './App.css'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (    
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10
  

  return (
      <div>
        <h1>Greetings</h1>
        <Hello name={name} age={10 +12}/>
        <Hello name='Mbezo' age={age} />
      </div>
      
 
  )
}

export default App
