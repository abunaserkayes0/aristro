import React from "react";

const BlogCalculation = ({ singleBlogCart }) => {
  const { tittle } = singleBlogCart;
  return (
    <div>
      <p className="fw-bold shadow-lg py-2 my-2 rounded-3">{tittle}</p>
    </div>
  );
};

export default BlogCalculation;
