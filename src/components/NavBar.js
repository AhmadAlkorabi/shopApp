import { PiCoatHangerFill, PiShoppingBag } from "react-icons/pi";
import photo1 from './photo1.jpg'
import { Link } from "react-router-dom";
import { SideBarContext } from "./context/SideBarContext";
import { useCallback, useContext } from "react";
import { CartContext } from "./context/CartContext";
const NavBar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)
  const { itemAmount }= useContext(CartContext)
  return (
    
      <div className=" flex fixed w-full z-20 justify-around align-items-center px-10 bg-orange-600 py-5">
        <Link to={'/'}><PiCoatHangerFill className="text-4xl" /></Link>
        <div className="cursor-pointer flex relative" onClick={() => {
          setIsOpen(!isOpen)
          
        }}>
          <PiShoppingBag className="text-4xl" />
          <div className="bg-white absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18x] rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    
  )
}

export default NavBar