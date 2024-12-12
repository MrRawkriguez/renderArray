import './App.css'

function App() {

  //const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]

  const ninjaTurtles = [
    <h2>Donatello</h2>,
    <h2>Michaelangelo</h2>,
    <h2>Rafael</h2>,
    <h2>Leonardo</h2>,
  ]

  return (
    <main>
      <h1>Ninja Turtles:</h1>
      {ninjaTurtles.join(", ")}
    </main>
  )
}

export default App
