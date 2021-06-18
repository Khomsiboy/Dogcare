import React,{ useState } from 'react' 
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import './info.css'


const Info = () =>{

    let {chipNumber} = useParams() 

    const [data, setData] = useState([])

    const GetData= () =>{
         const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41";
         fetch(url)
         .then(data => data.json())
         .then(data => {
            setData(data)
         })
     }
 
     useEffect(() =>{
       GetData()
     },[])

    return(

      

        <div>

        {data.filter((dog) =>{
          if(dog.chipNumber.toLowerCase() === chipNumber.toLowerCase()){
              return data
          }else{
              return null
          }
        }).map((dog) => (

            
        
             <div className="card-container">
             
            <div className="up-containter">
                <div class="img-container">
                <img src={dog.img} alt="dog"/>
                </div>
            </div>
            <div className="low-container"> <h2>{dog.name}</h2>
                 <ul className="no-bullets">
                     <li>Breed <h6>{dog.breed}</h6></li>
                     <li>Sex <h6>{dog.sex}</h6></li>
                     <li>Age <h6>{dog.age}</h6></li>
                     <li>Owner <h6>{dog.owner.name} {dog.owner.lastName}</h6></li>
                 </ul>
                      <a href="">{dog.owner.phoneNumber}</a>
                 </div>
                  </div>
        ))
        
        
        }
        
        </div>
    );
}

export default Info