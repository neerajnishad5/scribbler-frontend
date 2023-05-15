import React from "react";
import moment from "moment";

function BlogWideCard({ blogList }) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {blogList.map((blog) => {
        return (
          <div className="card mb-2">
            <div className="row">
              <img
                className="card-img-top"
                src="https://robohash.org/crytp"
                alt="mahesh"
                style={{
                  width: "150px",
                }}
              />
              <div className="col">
                <div className="card-body">
                  <h5 className="card-title">{blog.heading}</h5>
                  <p>Updated at: 
                  {moment(blog.updatedAt).startOf("day").fromNow()}</p>
                  <p className="card-text">{blog.blog}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogWideCard;
