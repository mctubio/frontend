import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layuot/Nav.css";

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quienes"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Quienes somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/especialidades"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Especialidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/informacion"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Informacion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talleres"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Talleres
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/turnos"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Turnos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
