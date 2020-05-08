import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./index.css";
import EventumIcon from "../../assets/icons/eventumIcon.png";
import {  useSelector } from "react-redux";

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const activeuser = useSelector(state => state.userId);
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundImage: "linear-gradient(to right, #0879FD , #31c8f8)",
      }}
    >
      <div className="logo">
        <NavLink activeClassName="active" to="/home">
          {/* <Icon type="user" style={{ fontSize: "24px", color: "#fff" }} />
           */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={EventumIcon}
              alt="Eventun Icon"
              style={{
                height: "50px",
              }}
            />
          </div>
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        style={{
          lineHeight: "64px",
          background: "transparent",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        <Menu.Item key="1">
          <NavLink activeClassName="active" to="/searchEvents">
            Eventos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink activeClassName="active" to="/searchGroups">
            Grupos
          </NavLink>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Usuario</span>
            </span>
          }
        >
          <Menu.Item style={{ background: "#31C8F8" }} key="7">
            <NavLink activeClassName="active" to="/signin">
              Cerrar Sesion
            </NavLink>
          </Menu.Item>
          <Menu.Item style={{ background: "#31C8F8" }} key="8">
            <NavLink activeClassName="active" to={`/userProfile/` + activeuser}>
              Mi perfil
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default Navbar;
