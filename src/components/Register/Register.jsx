import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { register } from "../../api/userApi";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data) => {
    register(data);
  };

  return (
    <div className="row">
      <div className="col">Hello</div>
      <div className="container col item2">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                {...register("name", {
                  required: true,
                })}
                autoCapitalize="on"
              />
              {errors.name?.type === "required" && (
                <p role="alert">Name is required</p>
              )}
            </div>

            <div className="email">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p role="alert">Email is required</p>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p role="alert">Password is required</p>
              )}
            </div>

            <div className="username">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                {...register("username", {
                  required: true,
                })}
              />
              {errors.username?.type === "required" && (
                <p role="alert">Username is required</p>
              )}
            </div>

            <div className="gender">
              <label htmlFor="name">Gender</label>
              <select
                {...register("gender", {
                  required: true,
                })}
                className="form-control"
              >
                <option value="" disbaled>
                  -- Select gender --
                </option>
                <option value="F">Female</option>
                <option value="M">Male</option>
                <option value="O">Other</option>
              </select>
              {errors.gender?.type === "required" && (
                <p role="alert">Gender is required</p>
              )}
            </div>
          </div>

          <input className="btn btn-success btn-lg" type="submit" />
        </form>
      </div>
    </div>
  );
}
