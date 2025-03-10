import React, { useState } from "react";
import HomeDashboard from "./HomeDashboard";
import { FaCog } from "react-icons/fa"; // Import a settings icon from react-icons
import { useSelector } from "react-redux";
import "./Inventory.css"; // Include CSS for styling
import Cosmotics from './Cosmotics'
import MedicineInventory from "./MedicineInvetry";
import { useMediaQuery } from "react-responsive";

const Inventory = () => {
  const isMediumOrLarger = useMediaQuery({ query: '(min-width: 500px)' });
  const [showMenu, setShowMenu] = useState(false);
  const [showhumberger , setHum] = useState(false);
  const [showhumbergerR , setHumR] = useState(false);
  const [iconC, setIconsC] = useState(true);
  const [icons, setIcons] = useState(true);
  const [showC, setShowC] = useState(false);
  const [isVisible , setVisible ] = useState(true);
const [show, setShow] = useState(false);
  // Toggle popup menu visibility
  const user = useSelector((state) => state.user);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className="inventory-container" style={{backgroundColor:"#edf1f5" ,padding:"0", margin:"0"  , display:"gird" }}>
      {/* Top-left settings icon */}
      <div className="settings-icon" style={{position:"absolute"}}>
      <div  onClick={toggleMenu} style={{overflowX:"hidden" }}>
        <FaCog size={24} />
      </div>
      </div>

      {/* Popup menu */}
      {showMenu && (
        <div className="popup-menu" style={{overflowX:"hidden" , boxSizing:"border-box" , maxWidth:"100vw"}}>
          <ul>
            <li onClick={() => setVisible(true)}>Medicine</li>
            <li onClick={() => setVisible(false)}>Cosmetics</li>
          </ul>
        </div>
      )}
      <div style={{}}> 
          {isVisible ? <HomeDashboard /> : <Cosmotics />}
      </div>
   
     
    </div>
  );
};

export default Inventory;
