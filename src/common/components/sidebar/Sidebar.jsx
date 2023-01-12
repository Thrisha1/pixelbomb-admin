import React from "react";
import "./sidebar.css";
import plus from "../../../assets/Plus.png";
import users from "../../../assets/Users.svg";
import finance from "../../../assets/Finance.svg";
import right_user from "../../../assets/Right-user.svg";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="logo-box d-flex align-items-center text-center text-white ">
        <div className="logo"></div>
        <p className="logo-title">Pixelbomb</p>
      </div>
      <div className="base-line"></div>
      <div className="tab">
        <div className="tab1">
          <button className="create-btn d-flex justify-content-center align-items-center text-white">
            <img className="plus-icon" src={plus} alt="" />
            <p style={{ marginBottom: "0px" }} className="text-center">
              Create
            </p>
          </button>
        </div>
        <div className="sidenav-components">
          <div className="tab1">
            <p
              className="manage d-flex align-items-center"
              style={{ marginBottom: "0px" }}
            >
              Manage
            </p>
          </div>
          <div className="tab2 d-flex align-items-center">
            <div className="users d-flex align-items-center">
              <img src={users} alt="" />
              <p
                className="user-text d-flex align-items-center"
                style={{ marginBottom: "0px" }}
              >
                Users
              </p>
            </div>
          </div>
          <div className="tab3 d-flex align-items-center">
            <div className="users d-flex align-items-center">
              <img src={finance} alt="" />
              <p
                className="user-text d-flex align-items-center"
                style={{ marginBottom: "0px" }}
              >
                Plans
              </p>
            </div>
          </div>
        </div>
        <div className="sidenav-components">
          <div className="tab4">
            <p
              className="manage d-flex align-items-center"
              style={{ marginBottom: "0px" }}
            >
              Account
            </p>
          </div>
          <div className="tab3 d-flex align-items-center">
            <div className="users d-flex align-items-center">
              <img src={right_user} alt="" />
              <p
                className="user-text d-flex align-items-center"
                style={{ marginBottom: "0px" }}
              >
                Admin Users
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
