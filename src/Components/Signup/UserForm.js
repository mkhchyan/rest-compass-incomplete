import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import image from "./signup.svg";

export const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch({ data, navigate, type: "ADD_USER" });
          reset();
        })}
      >
        <div className="signupform-row flex">
          <div className="flex-col">
            <label className="form-label">Անուն</label>
            <input
              type="text"
              {...register("firstname", {
                required: true,
              })}
            />
            {errors.firstname && <input style={{ border: "solid 2px red" }} />}
          </div>
          <div className="flex-col">
            <label className="form-label">Ազգանուն</label>
            <input
              type="text"
              {...register("lastname", {
                required: true,
              })}
            />
            {errors.lastname && <input style={{ border: "solid 2px red" }} />}
          </div>
        </div>
        <div className="signupform-row">
          <label className="form-label">Էլ․ փոստ</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>Invalid email</p>}
        </div>
        <div className="signupform-row">
          <label className="form-label">Ընտրել երկիր</label>
          <select required {...register("country")}>
            <option value="Հայաստան">Հայաստան</option>
            <option value="Ռուսաստան">Ռուսաստան</option>
          </select>
          {errors.country && <input style={{ border: "solid 2px red" }} />}
        </div>
        <div className="signupform-row flex">
          <div className="flex-col">
            <label className="form-label">Գաղտնաբառ</label>
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && <input style={{ border: "solid 2px red" }} />}
          </div>
          <div className="flex-col">
            <label className="form-label">Կրկնել գաղտնաբառը</label>
            <input
              type="password"
              {...register("cpassword", {
                required: true,

                validate: (value) =>
                  value === watch("password") || "Passwords don't match.",
              })}
            />
            {errors.cpassword && <input style={{ border: "solid 2px red" }} />}
          </div>
        </div>
        <div className="radio">
          <label id="agree">
            <input type="checkbox" name="remember" /> Համաձայն եմ պայմաններին
          </label>
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
