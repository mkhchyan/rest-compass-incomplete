import "./contact.css";
import image from "./contact.svg";

export const ContactUs = () => {
  return (
    <>
      <div class="contact-form">
        <div class="left">
          <div className="left_div">
            <h2>Հետադարձ կապ</h2>
            <form>
              <div className="cform-row flexy">
                <div className="flex-row">
                  <span>Անուն</span>
                  <input type="text" required />
                </div>
                <div className="flex-row">
                  <span>Ազգանուն</span>
                  <input type="text" required />
                </div>
              </div>
              <div className="cform-row">
                <span>Էլ․ փոստ</span>
                <input type="text" required />
              </div>
              <div className="cform-row">
                <span>Վերնագիր</span>
                <input type="text" required />
              </div>
              <div className="cform-row textfield">
                <span>Տեքստ</span>
                <input type="text" required />
              </div>
              <div className="cform-row">
                <button type="submit" className="btn-send">Ուղարկել</button>
              </div>
            </form>
          </div>
        </div>
        <div class="right">
          <img src={image} />
        </div>
      </div>
    </>
  );
};
