import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../constants";
import { userProfileData } from "../../api/userApi";
import { useParams } from "react-router-dom";
import BlogWideCard from "../BlogWideCard/BlogWideCard";
let res;

export default function UserProfile() {
  const [data, setData] = useState([]);

  let { userId } = useParams();

  const allBlogs = async () => {
    const res = await userProfileData(4);
    setData(res.data.payload);
  };
  console.log(data);
  useEffect(() => {
    allBlogs();
  }, []);

  return (
    <div className=" container row ">
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://robohash.org/mahesh"
            alt="mahesh"
            style={{
              borderRadius: "50%",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{data.userId}</h5>
            <p className="card-text">Some quick example text to build on</p>
          </div>
        </div>
      </div>
      <div className="col">
        <BlogWideCard blogList={data} />
      </div>
    </div>
  );
}
