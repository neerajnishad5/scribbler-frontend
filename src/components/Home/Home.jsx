import Login from "../Login/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import blogHome from "../images/blogHome.svg";
import Blog from "../Blog/Blog.jsx";
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";

// exporting react Home component
export default function Home() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  console.log(SERVER_URL);

  const [blogList, setBlogList] = useState([]);

  const allBlogs = async () => {
    const res = await axios.get(`${SERVER_URL}/blogs`);
    if (res) {
      setBlogList(res.data.payload);
    }
  };

  // side effects
  useEffect(() => {
    allBlogs();
  }, []);

  return (
    <div className="home">
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md">
          <Blog blogList={blogList} />
        </div>
      </div>
    </div>
  );
}
