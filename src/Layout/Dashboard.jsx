import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaCalendar, FaList } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <GiStarsStack></GiStarsStack>
            Add review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
            <TbBrandBooking></TbBrandBooking>
            My Booking</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome></FaHome>
             Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">
            <FaList></FaList>
             Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
            <FaBagShopping></FaBagShopping>
             Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">
            <MdEmail></MdEmail>
             Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
