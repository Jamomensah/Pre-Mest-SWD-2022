import star from '../airbnbpics/Star.png';
export default function Card(props){
  return(
    <div className="title">
      
     <img src={props.picture} alt={props.name} width={props.width} height={props.height} />
      
     <div className="sub">
       <p className="kid">
         <img className="star" src={star} alt="pinkstar"/> <h3>{props.number} <span>{props.num}.USA</span></h3>
       </p>
       <p className="para">{props.title}</p>
       <p className="para"><b>From ${props.money}</b>/person</p>  
      </div>
   </div>
  )
}
