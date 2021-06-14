import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import styles from './mystyle.module.css'; 



const Welcome = () =>{
    return(

        <main>
          <div>
        <header><h1 className={styles.bigblue}>Dogy Care</h1>
            <p>
            <h4 className={styles.welcomeP}>Welcome to Dogy care. A simple way to take care of your dog</h4>
            </p>
        </header>
        <Link to="register" style={{ textDecoration: 'none' }}>
         <Button variant="outlined" color="secondary">
         Register
         </Button>
         </Link>

           </div>
            
        </main>
    );
}

export default Welcome