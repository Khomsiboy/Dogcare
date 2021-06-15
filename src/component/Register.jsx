import React,{ Component ,  useState } from 'react' 
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './register.css'

const Register = () => {

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
       
        <section class="container">
           
         
       
             {data.map(dogs => 
               
             
                  <div class="card">
                      <div><img className="card-image" src={dogs.img} alt="dog"/></div>
                      <h2>{dogs.name}</h2>
                      <p>Breed:{dogs.breed}<br/>Age:  {dogs.age}</p>

                      <a href="">SHOW</a>
                  </div>
             
         )}
       
        
       </section>
     

    );
}










export default Register