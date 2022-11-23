import Contents from "./components/Contents";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import './App.css'

function App() {

  return (
    <div className="container mx-auto">
    <Nav />
    <Hero />
    <Contents />
  </div>
  )
}

export default App
