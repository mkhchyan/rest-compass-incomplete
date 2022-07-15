import { Link } from "react-router-dom";
import "./routings.css";
import { TbDiscount2 } from "react-icons/tb";
import { BiCalendarStar } from "react-icons/bi";
import { MdPlayArrow } from "react-icons/md";
import Sale from "./img/image58.png";
import Event from "./img/image59.png";
import Weekend from "./img/image60.png";
import Tours from "./img/image62.png";
import Appart from "./img/apartment1.png";
import Partner from "./img/image63.png";

export const Routings = () => {
  return (
    <>
      <div class="rout-grid">
        <div class="routs">
          <div class="pic">
            <img src={Sale} />
          </div>
          <div class="more">
            <p>
              <TbDiscount2 />
              Զեղչեր/ակցիաներ
            </p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
        <div class="routs">
          <div class="pic">
            <img src={Event} />
          </div>
          <div class="more">
            <p>
              <BiCalendarStar /> Տոներ/Իվենթներ
            </p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
        <div class="routs">
          <div class="pic">
            <img src={Weekend} />
          </div>
          <div class="more">
            <p>Ո՞ւր գնալ Weekend-ին</p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
        <div class="routs">
          <div class="pic">
            <img src={Tours} />
          </div>
          <div class="more">
            <p>Թեժ տուրեր/Արշավներ</p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
        <div class="routs">
          <div class="pic">
            <img src={Appart} />
          </div>
          <div class="more">
            <p>Տոպ ապարտամենտներ</p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
        <div class="routs">
          <div class="pic">
            <img src={Partner} />
          </div>
          <div class="more">
            <p>Մեր գործընկերներն են</p>
            <p>
              <Link to="/" className="more1">
                Տեսնել ավելին <MdPlayArrow />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
