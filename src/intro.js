import React from "react";
import './intro.css'


const Intro = () =>{
    return(
        <div>
            <div class="on-intro"> </div>

            <b> <h1 class="intro">Get paid completing </h1> </b>
            <b> <h1 class="intro2"> tasks near you </h1> </b>

            <span> 
                <button  id="download">
                    <i class="fa-brands fa-google-play fa-2x"></i> Download on Google play
                </button>  
                <button id="download">
                    <i class="fa-brands fa-apple fa-2x"></i> Download on Apple store
                </button> 
            </span>

            <div class="landing-imgs">
                <img src="Line 20.png" alt="dotted-line" class="line"/>
                <img src="Successful verrifcation 1.png" alt="check" class="check"/>
                <img src="illustration-of-person-holding-smart-phone-hand-holding-smart-phone-vector-removebg-preview 1.png" alt="phone" class="holdphone"/>
                <img src="Rectangle 2741.png" alt="rec1" class="rec1"/>
                <img src="You’ve been BOOKED! to work.png" alt="phone-text1" class="phone-text1"/>
                <img src="Rectangle 2741.png" alt="rec2" class="rec2"/>
                <img src="Hi Mayo, You’ve been matched with 3 talents.png" alt="phone-text2" class="phone-text2"/>
                <img src="building.png" alt="build" class="building"/>
            </div>
        </div>
    );
}

export default Intro;