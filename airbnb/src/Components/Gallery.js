import Card from "./Card";
import Children from "./Children";

 function Gallery(){
    return(
        <div className="gallery">
          <Children heading="SOLD OUT">
            <Card 
              picture={require("../airbnbpics/image12.png")} 
              name="athlete"
              width={250} 
              height={300}
              number={5.0}
              num="(6)"
              title="Life lessons with Katie Zoferes"
              money= {136}   
           />
         </Children>

          <Children heading="ONLINE">
            <Card 
              picture={require("../airbnbpics/weddingphotography.png")}
              name="wedding" 
              width={250} 
              height={300}
              number={5.0}
              num="(30)"
              title="Learn wedding photography"
              money={125}   
            />
         </Children>
 
          
            <Card 
              picture={require("../airbnbpics/mountainbike.png")} 
              name="bike" 
              width={240} 
              height={300}
              number={4.8}
              num="(2)"
              title="Group Mountain Biking"
              money={50}   
           />
         
        </div>
    )
}export default Gallery
