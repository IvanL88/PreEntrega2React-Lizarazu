import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/cartwidget";
import styles from "./Navbar.module.css";
import MouseIcon from "@mui/icons-material/Mouse";
import { BsCart4 } from "react-icons/bs";

function navbar() {
  let activeStyle = {
    color: '#e63946',
    textDecoration: "none",
  };

  let noActiveStyle = {
    textDecoration: "none",
    color: '#f1faee'
  };

  return (
    <nav className={styles.container}>    
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
        >
        <div className={styles.logo}>
        <MouseIcon
          sx={{
            color: "#f1faee",
          }}
        />
        Mouseland
      </div>
      </NavLink>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="productos"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Productos
      </NavLink>
      <NavLink
        to="categorias"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Categorías
      </NavLink>         
      <NavLink
        to="cart"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        <BsCart4  size={24}/>
      </NavLink>
    </nav>
  );
}

export default navbar;
