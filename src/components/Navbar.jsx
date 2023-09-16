// import React from "react";
// import { FcHome, FcConferenceCall, FcReadingEbook, FcPhone, FcFeedback } from "react-icons/fc";
// import { CgLogIn } from "react-icons/cg";
// import { SiGnuprivacyguard } from "react-icons/si";
// // import "images/development-4536630.svg"
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="bg-info">

//       <ul className="navbar-list">

//         <li>
//           <Link to="/">
//             <FcHome className="spin" title="Touch Icon" /> Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/login">
//             <CgLogIn className="spin" title="Touch Icon" /> Log-in
//           </Link>
//         </li>
//         <li>
//           <Link to="/signup">
//             <SiGnuprivacyguard className="spin"title="Touch Icon" /> Register
//           </Link>
//         </li>
//         <li>
//           <Link to="contact">
//             <FcConferenceCall className="spin" title="Touch Icon" /> Contact us
//           </Link>
//         </li>
//         <li>
//           <Link to="about">
//             <FcReadingEbook className="spin" title="Touch Icon"/> About us
//           </Link>
//         </li>
//         <li>
//           <span title=" Any quieres Call" >
//             <FcPhone className="Fa-spin" /> 9076944738
//           </span>
//         </li>
//         <li>
//           <span  title="Send E-mail">
//             <FcFeedback className="Fa-spin" /> vidyadhar9076944738@gmail.com
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="home"
        >Home</Link>

        <Link to="about"
        >About</Link>

        <Link to="test" 
        >Testimonials</Link>

        <Link to="contact"
        >Conatct</Link>

         <Link to="work"
          
        >Work</Link>


        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Booking Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
