import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const PartnerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => console.log(data);

  return (
    <>
      <form>
        <div className="signupform-row flex">
          <div className="flex-col">
            <label className="form-label">Անուն</label>
            <input type="text" required />
          </div>
          <div className="flex-col">
            <label className="form-label">Ազգանուն</label>
            <input type="text" required />
          </div>
        </div>
        <div className="signupform-row">
          <label className="form-label">Էլ․ փոստ</label>
          <input type="text" required />
        </div>
        <div className="signupform-row flex">
          <div className="flex-col">
            <label className="form-label">Գաղտնաբառ</label>
            <input type="password" required />
          </div>
          <div className="flex-col">
            <label className="form-label">Կրկնել գաղտնաբառը</label>
            <input type="password" required />
          </div>
        </div>
        <div className="signupform-row">
          <Link to="/login"> Մուտք </Link>
        </div>
        <div className="form-row">
          <button type="submit">Գրանցվել</button>
          <div className="signupform-row"></div>
        </div>

        <button className="btn">
          <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
          Գրանցվել Գուգլի միջոցով
        </button>
      </form>
    </>
  );
};
