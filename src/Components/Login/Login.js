import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import image from "./login.svg";
import "./login.css";
import { Recaptcha } from "react-recaptcha";
import { useState } from "react";

export const Login = () => {
  
  const [isVerify, setisVerify] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => console.log(data);

  const recaptchaLoaded = () => console.log("capcha successfully loaded");

  const verifyCallback = (response) => {
    if (response) {
      // setisVerify(true);
      console.log("done");
    }
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="left_side">
          <img src={image} />
        </div>
        <div className="right_side">
          <h2>Մուտք</h2>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="form-row">
              <label className="form-label">Էլ․ փոստ</label>
              <input type="text" required {...register("username")} />
            </div>
            <div className="form-row">
              <label className="form-label">Գաղտնաբառ</label>
              <input type="password" required {...register("password")} />
            </div>
            <div className="radio">
              <label>
                <input type="checkbox" name="remember" id="radio" /> Հիշել ինձ
              </label>
              <Link to="/">Մոռացե՞լ եք գաղտնաբառը</Link>
            </div>
            <div className="form-row">
              {/* <Recaptcha
                sitekey="6LfTolwUAAAAAJ16pnJ1qBgXKlzGeKXRsCMRXllK"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifyCallback}
              /> */}
            </div>
            <div className="form-row"></div>
            <div className="form-row">
              <button type="submit">Մուտք</button>
              <div className="form-row"></div>
            </div>
          </form>
          <div className="form-row">
            <button className="btn">
              <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
              Մուտք Գուգլի միջոցով
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
