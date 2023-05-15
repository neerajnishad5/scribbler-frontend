import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center background-add">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div
              style={{ width: "30rem" }}
              className="container shadow p-3 mb-5 bg-white rounded"
            >
              <h2 className="text-danger"></h2>
              <h2 className="text-warning"></h2>

              <h2 className="mb-4">Login</h2>
              <h3 className="text-danger"></h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-3 text-dark form-group bg-light border"
              >
                <div className="col ">
                  <label className="float-start mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    {...register("email", {
                      required: true,
                    })}
                    autoFocus
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.email?.type === "required" && (
                    <span className="text-danger float-start">
                      Email ID is required
                    </span>
                  )}
                </div>

                <br />
                {/* password */}
                <div className="col">
                  <label className="float-start mb-2" htmlFor="dob">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    {...register("password", { required: true })}
                  />

                  {/* errors will return when field validation fails  */}
                  {errors.password?.type === "required" && (
                    <span className="text-danger float-start">
                      Password is required
                    </span>
                  )}
                </div>
                <br />

                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-success d-block mx-auto btn-md mt-3"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-success d-block mx-auto btn-md mt-3"
                      type="submit"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
