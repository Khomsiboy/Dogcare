import React from 'react'
import {Link} from 'react-router-dom'
import './welcome.css'
import Dog from './img/dog.png'



const Welcome = () =>{
    return(

        <main>
          <div>
          <div class="header">
  <h1>Dog Care</h1>
  <p>Better care center</p>
   </div>
   <div>

        <Link to="register" style={{ textDecoration: 'none' }}>
        <p><button class="button">Dogs Category</button></p>
         
         </Link>

         <div className="slogan">
           <h1>Let Our Experience be Your Guide</h1>
           <img  src={Dog} width={200} height={200}/>
         </div>
   </div>

   <div class="footer">
  <h2>Dog Care</h2>
  <h6>Contact +461238787</h6>
</div>
           </div>

        </main>
    );
}

export default Welcome