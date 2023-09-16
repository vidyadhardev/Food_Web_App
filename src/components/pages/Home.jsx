// import React from 'react';

// import { FcBusinessman, FcBiohazard, FcCustomerSupport, FcMultipleDevices } from "react-icons/fc"
// import "../styles/Home.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init({
//   offset: 300,
//   duration: 1000,
// });

// function Home() {
//   return (

//     // <div className="container row sm rounded">
//     //   <div className='container-imagecol-6'>
//     //     
//     //     <div className='container-containt'>
//     //       "Lorem ipsum dolor sit amet, consectetur

//     //       CSS mei element ko transparent banane ke liye aap opacity property ka istemal kar sakte hain. opacity property element ke opacity ko control karta hai, jahan 0 ki value element ko puri tarah se transparent bana deti hai aur 1 ki value element ko puri tarah se
//     //       visible rakhti hai. Aap is property ko element ke liye set kar sakte hain, jaise ki ye example:
//     //     </div>
//     //   </div>


//     //   <div className='container-fluid bg-primary col-6'>
//     //     The standard Lorem Ipsum passage, used since the 1500s
//     //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//     //   </div>
//     // </div>

//     <div className='container-fluid'>
//       <div className='container-image' >
//         <img src='/images/web.jpg'></img>
//         <div className='square text-lowercase'><FcBusinessman className='icons' />
//           <hr />
//           <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin dignissim dignissim. Morbi finibus nulla sit amet pulvinar sodales. Cras tempus eros  </h4>
//         </div>
//         <div className='square'><FcBiohazard className='icons' />  <hr />
//           <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin dignissim dignissim. Morbi finibus nulla sit amet pulvinar sodales. Cr .</h4>
//         </div>
//         <div className='square'> <FcCustomerSupport className='icons' /> <hr />
//           <h4> Lorem ipsum dolor sit amet, consectetur ad Cras tempus eros velit, id euismod sapien sagittis sit amet. Sed lobortis  </h4>
//         </div>
//         <div className='square'> <FcMultipleDevices className='icons' />  <hr />
//           <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin dignissim dignissim. Morbi finibus nulla sit amet pulvinar sodales. Cras tempus eros velit, id euismod sapien sagittis sit amet. Sed lobortis vestibulum porta. Vivamus nec eleifend massa, iaculis rhoncus dolor. Maecenas dolor dui, imperdiet vel consequat ut, scelerisque non orci. Cras tincidunt ultrices odio id euismod. Cras vulputate justo quis risus volutpat dignissim. Pellentesque bibendum pulvinar elit,
//             sed viverra massa ultricies eget. Morbi auctor risus ut elititudin.</h4>
//         </div>

//       </div>


//     </div>
//   )
// }

// export default Home

// import React, { useState, useEffect } from 'react';
// import "../styles/Home.css"
// import backgroundImage from "./web.jpg"; // Replace with the actual path to your image

// const Home = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   // Update currentDateTime every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <div style={divStyle}>
//       <div className='mt-1 ms-2'>
//         <p>{currentDateTime.toLocaleString()}</p>
//       </div>
//       <div className='div-contant'>
//         <div className=' text-info text-center fs-4 mt-3 p-1 w-50 rounded' style={centerDiv}>
//           hello No internet

//           Checking the network cables, modem, and router
//           Reconnecting to Wi-Fi
//           Running Windows Network Diagnostics
//           ERR_INTERNET_DISCONNECTED
//         </div>
//         <div className='text-info text-center fs-4 mt-3 p-1 w-50 rounded' style={centerDiv}>
//           hello No internet
//           Try:

//           Checking the network cables, modem, and router
//           Reconnecting to Wi-Fi
//           Running Windows Network Diagnostics
//           ERR_INTERNET_DISCONNECTEDNo internet
//           Try:
//         </div>
//         <div className='text-info text-center fs-4 mt-3 p-1 w-50 mb-3 rounded' style={centerDiv}>
//           hello No internet
//           Try:

//           Checking the network cables, modem, and router
//           Reconnecting to Wi-Fi
//           Running Windows Network Diagnostics
//           ERR_INTERNET_DISCONNECTEDNo internet
//           Try:


//         </div>

//       </div>
//       <div>


//       </div>
//     </div>
//   );
// };

// export default Home;


// const divStyle = {
//   backgroundImage: `url(${backgroundImage})`, // Use the imported image variable here
//   backgroundSize: 'cover',
//   backgroundPosition: "center",
//   backgroundRepeat: 'no-repeat',
//   minHeight: '13rem',
//   display: 'flex',
//   flexDirection: 'column',
//   color: 'yellow',
//   overflow: "inherit",

// };
// const centerDiv = {
//   marginLeft: "10rem",
//   border: ".1rem solid black",
//   borderRadius: ".5rem",
//   backgroundColor: "whitesmoke",
//   overflow: "inherit",
// }



import React from 'react';
import BackgraundImage from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from '../Navbar'
const Home = () => {
  return (
    <div className='home-container' id='home'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BackgraundImage} alt=''></img>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Favorite Food Delivered Hot & fresh
          </h1>
          <p className='primary-text'>
            Healhty switcher chefs do all the pre work , like peading ,Chopping
            & marinating ,so you  can cook a fresh food .
          </p>
          <button className='secondary-button'>Order Now <FiArrowRight /></button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage}></img>
        </div>
      </div>
    </div>
  )
}

export default Home;