import React, {  useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { NavLink } from "react-router-dom";
import { useAuth } from '../providers/AuthProvider'
import { useUser } from '../providers/UserProvider'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { logOut } = useAuth()
  const { balance } = useUser()

  const location = useLocation();
  const getCurrentUrl = (location) => {
    return location.pathname.split(/[?#]/)[0];
  };

  const checkIsActive = (location, url) => {
    const current = getCurrentUrl(location);

    if (!current || !url) {
      return false;
    }

    if(url === "collections" && current === "/"){
      return true;
    }
    
    if (current === url || (current === "/" && url === "home")) {
      return true;
    }

    return current.indexOf(url) > -1;
  };

  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "active" : "";
  };

  const getMenuName = () => {

    if (getMenuItemActive("home")) {
      return "Home";
    }

    if (getMenuItemActive("lockherc")) {
      return "LockHerc";
    }

    if (getMenuItemActive("sysadmin")) {
      return "SysAdmin";
    }
    if (getMenuItemActive("createfunction")) {
      return "Function";
    }
    if (getMenuItemActive("assignrole")) {
      return "AssignRole";
    }
    if (getMenuItemActive("logout")) {
      return "LogOut";
    }
    

    return "";
  };


  return (
    <HeaderWrapper className="header-menu d-flex justify-content-center animation-stretchRight">
      <ul className="desktop-menu-nav list-unstyled">
      <li className={`menu-item ${getMenuItemActive("home")} hover-effect2`}>
          <NavLink className="menu-link" exact to="/home">
            <span className="menu-text">Home</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("lockherc")} hover-effect2`}>
          <NavLink className="menu-link" exact to="/lockherc">
            <span className="menu-text">LockHerc</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("sysadmin")} hover-effect2`}>
          <NavLink className="menu-link" to="/sysadmin">
            <span className="menu-text">SysAdmin</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("createfunction")} hover-effect2`}>
          <NavLink className="menu-link" to="/createfunction">
            <span className="menu-text">Function</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("assignrole")} hover-effect2`}>
          <NavLink className="menu-link" to="/assignrole">
            <span className="menu-text">AssignRole</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "unlock-wallet"
          )} hover-effect2`}
        >
          <NavLink className="menu-link" to={balance ? "#" : "/unlock-wallet"}>
            <span className="menu-text">
              {balance ? (
                <span className="menu-text">
                  <strong>{`${(balance / Math.pow(10, 18)).toFixed(
                    2
                  )} `}</strong>
                  FUSD
                </span>
              ) : (
                "Unlock Wallet"
              )}
            </span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("logout")} hover-effect2`}>
          <NavLink className="menu-link" onClick={() => logOut()} to="/">
            <span className="menu-text">Logout</span>
          </NavLink>
        </li>
      </ul>
      <ul className="mobile-menu-nav list-unstyled">
        <li className="menu-item">
          <div className="menu-link">
            {!mobileMenu ? (
              <MenuIcon onClick={(e) => setMobileMenu(true)} />
            ) : (
              <CloseIcon onClick={(e) => setMobileMenu(false)} />
            )}
            <span className="menu-text">{getMenuName()}</span>
          </div>
        </li>
        {mobileMenu && (
          <div className="mobile-menu" onClick={(e) => setMobileMenu(false)}>
            <NavLink className={`${getMenuItemActive("home")}`} exact to="/home">Home</NavLink>
            <NavLink className={`${getMenuItemActive("lockherc")}`} exact to="/lockherc">LockHerc</NavLink>
            <NavLink className={`${getMenuItemActive("sysadmin")}`} to="/sysadmin">SysAdmin</NavLink>
            <NavLink className={`${getMenuItemActive("createfuntion")}`} to="/createfuntion">Function</NavLink>
            <NavLink className={`${getMenuItemActive("assignrole")}`} to="/assignrole">AssignRole</NavLink>
            <NavLink className={`${getMenuItemActive("logout")}`} to="/" onClick={() => logOut()}>Logout</NavLink>
          </div> 
        )}
      </ul>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  .menu-item {
    height: 50px;
    margin-right: -17.5px;
    text-align: center;
    background-size: 100% 100%;

    .menu-link {
      height: 100%;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      .menu-text {
        color: #000000;
        font-size: 1rem;
        line-height: 2rem;
        font-family: Orbitron-Medium;
        margin-left: -3.17px;
        margin-top: -4.66px;
        display: inline-block;
        text-shadow: 3.5px 4.67px 2.1px
          ${(props) => props.theme.darken("#277875", 0.5)};
      }
    }

    &.active {
      .menu-link {
        .menu-text {
          color: #fec100;
          font-weight: 900;
        }
      }
    }
  }

  .desktop-menu-nav {
    margin-left: -18px;
    margin-bottom: 0px;
    display: flex;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    .menu-item {

      background-image: url("/static/images/bg/components/header/menu-item-2-bg.png");
      width: 149.22px;

      &.active {
        background-image: url("/static/images/bg/components/header/menu-item-2-bg--active.png");
      }

      &:nth-of-type(1) {
        background-image: url("/static/images/bg/components/header/menu-item-1-bg.png");
        width: 145.53px;

        &.active {
          background-image: url("/static/images/bg/components/header/menu-item-1-bg--active.png");
        }
      }
    }
  }

  .mobile-menu-nav {
    display: none;
    padding: 10px 20px 5px 10px;
    height: 50px;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: row;
      width: 100vw;
      max-width: 100%;
    }

    .menu-item {
      flex: 1;

      svg {
        margin-top: -10px;
      }

      .menu-text {
        margin-top: -10px;
      }

      &:nth-of-type(1) {
        background-image: url("/static/images/bg/components/header/menu-item-1-bg.png");
        padding-left: 15px;

        .menu-text {
          flex: 1;
        }
      }

      &:nth-of-type(2) {
        background-image: url("/static/images/bg/components/header/menu-item-5-bg.png");
        &.active {
          background-image: url("/static/images/bg/components/header/menu-item-5-bg--active.png");
        }
      }
    }

    .mobile-menu {
      position: absolute;
      width: 100vw;
      max-width: 100%;
      height: calc(100vh - 60px);
      background: #000;
      opacity: 0.9;
      z-index: 500;
      left: 0px;
      top: 55px;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      padding-top: 100px;

      a {
        font-size: 2rem;
        line-height: 3rem;
        color: #80f1ed;
        font-family: Orbitron-Black;
        text-shadow: 4px 4px 2.7px #27787580;
        margin-top: 10px;

        &.active {
          color: #fec100;
        }
      }
    }
  }
`;

export default Header;
