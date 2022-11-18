import { useState, useEffect} from "react";

export function Perrito(){

const[isLoading, setIsloading] = useState(true);
const[iamgenUrl,setImageUrl]= useState(null)
useEffect(()=>{

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((respose)=>respose.json())
    .then((dog)=>{
        setImageUrl(dog.message);//guarda la imagen / guarda los datos
        setIsloading(false);//desactiva el modo "cargando"
    })
},[]);

if(isLoading){


    return(

        <div>
            <h1>Cargando.......</h1>
        </div>

    );
}

    return(
        <div>

            <h1>Fotos de Perritos</h1>
            <img src={iamgenUrl} alt="10px"  />
        </div>

    )

        
    return (

        <div>
            <h1>Cargando.........</h1>
    
        </div>
    
         );


}