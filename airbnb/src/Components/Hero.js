import grid from '../airbnbpics/Group 77.png';
function Hero(){
    return(
        <div className="hero">
         <img src={grid} alt="hero"/>
         <h1>Online Experiences</h1> 
         <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p> 
        </div>      
    )
}
export default Hero;