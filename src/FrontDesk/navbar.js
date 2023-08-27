
// import React, { useState } from "react";
// import "./navbar.css";
// import {
//   FaUserPlus,
//   FaUserCircle,
//   FaTrophy,
//   FaMoneyCheck,
// } from "react-icons/fa";
// import { LiaPhoneSquareSolid } from "react-icons/lia";
// import { FiSearch } from "react-icons/fi";
// import { FcAssistant } from "react-icons/fc";
// import {
//   MdOutlineLocalHospital,
//   MdCalendarMonth,
//   MdViewList,
// } from "react-icons/md";
// import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <BsList
//           size={30}
//           onClick={toggleMobileMenu}
//           className="mobile-icon"
//         />
//         <ul
//           className={`nav-list ${
//             isMobileMenuOpen ? "mobile-open" : "mobile-closed"
//           }`}
//         >
//           <li>
//             <MdOutlineLocalHospital />
//             Health<span>Care</span>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <FaMoneyCheck />
//               All Bills
//             </a>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <MdViewList />
//               Add Services
//             </a>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <MdCalendarMonth />
//               Patients Q
//             </a>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <LiaPhoneSquareSolid />
//               Online Consultation
//             </a>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <FaUserPlus />
//             </a>
//           </li>&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <input type="text" />
//               <FiSearch />
//             </a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <FcAssistant />
//             </a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <BsFillGrid3X3GapFill />
//             </a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//             <a href="#">
//               <FaTrophy />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <FaUserCircle />
//             </a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;
//           <li>
//               <BsList size={"25px"} />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

// Navbar.js
import React, { useState } from "react";
import "./navbar.css";
import {
  FaUserPlus,
  FaUserCircle,
  FaTrophy,
  FaMoneyCheck,
} from "react-icons/fa";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import { FcAssistant } from "react-icons/fc";
import {
  MdOutlineLocalHospital,
  MdCalendarMonth,
  MdViewList,
} from "react-icons/md";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <BsList
          size={30}
          onClick={toggleMobileMenu}
          className="mobile-icon"
        />
        <ul
          className={`nav-list ${
            isMobileMenuOpen ? "mobile-open" : "mobile-closed"
          }`}
        >
          <li>
            <MdOutlineLocalHospital />
            Health<span>Care</span>
          </li>
          <li>
            <a href="#">
              <FaMoneyCheck />
              All Bills
            </a>
          </li>
          <li>
            <a href="#">
              <MdViewList />
              Add Services
            </a>
          </li>
          <li>
            <a href="#">
              <MdCalendarMonth />
              Patients Q
            </a>
          </li>
          <li>
            <a href="#">
              <LiaPhoneSquareSolid />
              Online Consultation
            </a>
          </li>
          <li>
            <a href="#">
              <FaUserPlus />
            </a>
          </li>
          <li>
            <a href="#">
              <input type="text" />
              <FiSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <FcAssistant />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillGrid3X3GapFill />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTrophy />
            </a>
          </li>
          <li>
            <a href="#">
              <FaUserCircle />
            </a>
          </li>
          <li>
            <a href="#">
              <BsList size={"25px"} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
