import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="pagesize">
        <div className="footerwrap">
          <div className="innerwrap">
            <div className="boxes">
              <div className="box">
                <Link to="/about">
                  <span>Rest Compass</span>-ի մասին
                </Link>
                <Link to="/why-rest-compass">
                  Ինչո՞ւ <span>Rest Compass</span>
                </Link>
                <Link to="/advantages">
                  <span>Rest Compass</span>-ի առավելությունները
                </Link>
                <Link to="/terms">
                  <span>Rest Compass</span>-ի պայմաններն են
                </Link>
                <Link to="/">Տուրիստական բլոգ</Link>
                <Link to="/">
                  <span>Trip համակարգ </span>
                </Link>
              </div>
              <span className="line"></span>
              <div className="box">
                <Link to="/">Զեղչեր/ակցիաներ</Link>
                <Link to="/">Տոներ/Իվենթներ</Link>
                <Link to="/where_to_go_on_weekend">Ո՞ւր գնալ Weekend-ին</Link>
                <Link to="/">Թեժ տուրեր/արշավներ</Link>
                <Link to="/">Մեր գործընկերներն են </Link>
                <Link to="/">Տոպ ապարտամենտներ </Link>
              </div>
              <span className="line"></span>
              <div className="box">
                <Link to="/contact">Հետադարձ կապ</Link>
                <Link to="/careers">Կարիերան մեզ հետ</Link>
                <Link to="/suggestions">Առաջարկություններ</Link>
                <Link to="/privacy-policy">Գաղտնիության քաղաքականություն</Link>
              </div>
            </div>
            <span className="line"></span>
    
            <div className="subscribe">
              <p>Բաժանորդագրվեք նորություններին</p>
              <div className="custom-sub">
                <input
                  type="text"
                  className="custom-sub-input"
                  placeholder="Էլ․հասցե"
                />
                <button className="custom-sub-botton" type="submit">
                  <p>Բաժանորդագրվել</p>
                  <div className="send">
                    <IoIosPaperPlane className="subicon" />
                  </div>
                </button>
              </div>
              <div className="touch">
                <p>Մենք սոց․ ցանցերում</p>
                <div className="sociallinks">
                  <div className="icon">
                    <i className="fab fa-facebook f"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-instagram i"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyrights">
            <p>Copyright 2022 REST COMPASS | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
