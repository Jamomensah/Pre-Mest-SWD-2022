import picture from "./logo192.png"
import './asignment5.css'
function Nav(){
 return(
  <header className='top'>
    <img src={picture} alt="React logo"/>
    <p>ReactFacts</p>
    <h3>React Course - Project 1</h3>
 </header>
 )
}
  export default Nav;