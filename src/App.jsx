import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function MyForm() {

  const [selectedSex, setSelectedSex] = useState('banana');

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <form>
      <p>Aanhef:</p>
      <label htmlFor=""> Dhr.
        <input type="radio" name="Dhr." id="" value="M" checked={selectedSex === 'Dhr.'} onChange={handleChange}/>
      </label>
      <label htmlFor="">Mevr.
        <input type="radio" name="Mevr." id="" value="V" checked={selectedSex === 'Mevr.'} onChange={handleChange}/>
      </label>
      <label htmlFor="">Onbekend
        <input type="radio" name="Onbekend" id="" value="X" checked={selectedSex === ' '} onChange={handleChange}/>
      </label>
      <br />
      <label>Naam:
        <input type="text" required placeholder='Voornaam'/>
        <input type="text" required placeholder='Tussenvoegsel(S)'/>
        <input type="text" required placeholder='Achternaam'/>
      </label>
      <br />
      <button type="submit">Verder</button>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aanmelding</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>, 
    <MyForm />
  )
}

export default App
