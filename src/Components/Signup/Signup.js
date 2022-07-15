import React, { useState } from "react";
import "./signup.css";
import { useSpring, animated } from "react-spring";
import { UserForm } from "./UserForm";
import { PartnerForm } from "./PartnerForm";
import { Link } from "react-router-dom";
import image from "./signup.svg";
import { background } from "@chakra-ui/react";

export const Signup = () => {
  const [partnerFormStatus, setPartnerFormStatus] = useState(false);
  const userProps = useSpring({
    display: partnerFormStatus ? "none" : "flex", 
  });
  const partnerProps = useSpring({
    display: partnerFormStatus ? "flex" : "none", 
  });

  const userBtnProps = useSpring({
    background: partnerFormStatus ? "#cfcfeb" : "#fff",
    border: "0.7px solid #F2F2F4",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
    borderRadius: "4px",
    width: "198.95px",
    height: "38.87px",
  });
  const partnerBtnProps = useSpring({
    background: partnerFormStatus ? "#fff" : "#cfcfeb",
    border: "0.7px solid #F2F2F4",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
    borderRadius: "4px",
    width: "198.95px",
    height: "38.87px",
  });

  const [password, setPassword] = useState();
  const [option, setOption] = useState(1);
  console.log(option);

  const partnerClicked = () => {
    setOption(2);
    setPartnerFormStatus(true);
  };
  function userClicked() {
    setOption(1);
    setPartnerFormStatus(false);
  }

  return (
    <>
      <div className="contact-wrapper">
        <div className="left_side left_img">
          <img src={image} />
        </div>
        <div className="right_side">
          <h2>Գրանցվել որպես</h2>
          <div className="nav-buttons">
            <animated.button
              onClick={userClicked}
              id="loginBtn"
              style={userBtnProps}
            >
              Օգտատեր
            </animated.button>
            <animated.button
              onClick={partnerClicked}
              id="registerBtn"
              style={partnerBtnProps}
            >
              Գործընկեր
            </animated.button>
          </div>

          <div className="form-row">
            <animated.form action="" style={userProps}>
              <UserForm />
            </animated.form>
            <animated.form action="" style={partnerProps}>
              <PartnerForm />
            </animated.form>
          </div>
        </div>
      </div>
    </>
  );
};
