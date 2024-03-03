import React from "react";

function AboutUs() {
    return (
        <div className="aboutus">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css"/>
            <h1>About Us</h1>

            <p>We invite you to join us in using GyroGoGo for easy, convenient personal transportation. 
                Rent a gyrocar for a single run into downtown, or rent it for the day to visit multiple destinations. 
                <br></br>The cars are designed to carry a single passenger and a small amount of cargo.
                Gyrocars are easy to drive because internal gyroscopes balance the cars for you. 
                You don't need any special training to drive a gyrocar, just slide in and go! 
                <br></br>These cars have a small profile, so are easy to navigate through traffic - and parking is a breeze. County regulations even allow gyrocars to be parked in designated motorcycle slots.
                <br></br><br></br>We have five convenient pick up/drop off locations in Monroe County, including in center city. 
                Your rental is operated with a unique access code that prevents anyone else from entering your vehicle. 
                <br></br>If you've opted for a longer rental, our gyrocars can be recharged at any EV charging station.
                If you need more information, check out the Q&A section or send us a message through our Contact Page.
            </p>
            <h3><em>It's easy. It's convenient. It's cost effective. GyroGoGo!</em></h3>
            <div class="map">
            
                <img src={require("../images/gyrogogomaps.png")} alt="test" id="gyrogogomaps"/>

            </div>
            <div class="icons">
                <i class= "fa fa-facebook"></i>
                <i class= "fa fa-twitter"></i>
                <i class= "fa fa-instagram"></i>
                <i class= "fa fa-linkedin"></i>
            </div>
        </div>
    );
}

export default AboutUs;