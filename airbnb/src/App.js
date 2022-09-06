// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery';
import './styleairbnb.css'
// import SimpleForm from './Components2/SimpleForm'

function App(){
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Gallery/>
      {/* <SimpleForm/> */}
   </div>
   )
}
export default App;  