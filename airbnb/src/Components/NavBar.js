import picture from '../airbnbpics/logo.png'
function NavBar(){
    return(
    <nav className='top'>
      <img src={picture} alt="airbnb logo"/>
    </nav>
 )
}
export default NavBar;