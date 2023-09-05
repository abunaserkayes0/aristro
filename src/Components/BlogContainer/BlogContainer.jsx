import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import { Row } from "react-bootstrap";
import "./BlogContainer.css";
import BlogCalculation from "../BlogCalculation/BlogCalculation";
const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogCart, setBlogCart] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handelClick = (newBlog) => {
    const newBlogElm = [...blogCart, newBlog];
    setBlogCart(newBlogElm);
  };
  const handelBookMarked = (blog) => {
    const newTime = [...time, blog];
    setTime(newTime);
  };
  let totalTime = 0;
  for (const singleBlog of time) {
    totalTime = totalTime + parseFloat(singleBlog.time);
  }
  return (
    <div className="container">
      <div className="blogs-container">
        <Row xs={1} md={1} className="g-4">
          {blogs.map((blog) => (
            <SingleBlog
              key={blog.id}
              blog={blog}
              handelClick={handelClick}
              handelBookMarked={handelBookMarked}
            />
          ))}
        </Row>
      </div>
      <div className="blogs-Calculation bg-light p-3">
        <h5 className="fs-6 shadow-lg text-info fw-bold p-2">Spent time On Read:{totalTime} min</h5>
        <h6 className="fw-bold fs-6">BookMarked Blogs:{blogCart.length}</h6>
        {blogCart.map((singleBlogCart) => (
          <BlogCalculation
            key={singleBlogCart.id}
            singleBlogCart={singleBlogCart}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
