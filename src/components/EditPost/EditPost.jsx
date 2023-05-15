import { useForm } from "react-hook-form";
import "./EditPost.css";
import axios from "axios";
import { postBlog } from "../../api/userApi";
import { userLogin } from "../../slices/loginSlice";
import { useSelector } from "react-redux";

export default function EditPost({ placeholder }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const data = useSelector(userLogin);
  const { userId } = data;

  const onSubmit = async (data) => {
    const res = await postBlog(data, userId);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Content</label>
          <textarea
            className="form-control"
            id="post"
            type="textarea"
            name="post"
            {...register("post", { required: true })}
            style={{
              minHeight: "70vh",
            }}
          />
          {errors.post?.type === "required" && (
            <p role="alert">Content is required</p>
          )}
        </div>

        <div className="form-group mt-2">
          <select name="category" id="category" {...register("category")}>
            <option value="Education">Education</option>
            <option value="Fashion">Fashion</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <input className="btn btn-success btn-lg" type="submit" />
      </form>
    </div>
  );
}
