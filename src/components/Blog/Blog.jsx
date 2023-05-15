// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
export default function Blog({ blogList }) {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="blog-component container">
      {blogList.map((blog) => {
        return (
          <div key={randomIntFromInterval(0, 99999)} className="card">
            <div className="card-body row">
              <div className="col">
                <h4 className="card-title">{blog.heading}</h4>
                <p>Written by:{blog.user?.username}</p>
                <p className="card-text">{blog.blog}</p>
              </div>
              <div className="col">
                
                <img
                  src={"https://api.dicebear.com/6.x/lorelei/svg"}
                  alt=""
                  width={"70px"}
                  className="float-end"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
