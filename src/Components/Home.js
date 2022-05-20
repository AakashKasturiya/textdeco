import React from 'react';

function Home() {
    return(
        <>
        <div class="header">
        <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="images/logo.png" width="125px"/>
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <img src="images/cart.png" width="30px" height="30px"/>
            <img src="images/menu.png" class="menu-icon" onclick="menutoggle()"/>
        </div>
    
        <div class="row">
            <div class="col-2">
                <h1>Give Your Workout<br/> A New Style</h1>
                <p>Success isn't always about greatness.It's about consistency.Consistent <br/>hard work gains success.Greatness will come.</p>
            <a href="" class="btn">Explore Now &#8594; </a>
            </div>
            <div class="col-2">
                <img src="images/image1.png"/>
            </div>
        </div>
    
    </div>
    </div>
        </>
    );

}

export default Home;