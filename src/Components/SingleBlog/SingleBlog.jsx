import React, { useState } from "react";
import "./SingleBlog.css";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const SingleBlog = ({ blog, handelClick, handelBookMarked }) => {
  const {
    id,
    tittle,
    user_name,
    user_image,
    time,
    date,
    banner_image,
    tags: { first_tag, second_tag },
  } = blog;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={banner_image} />
          <Card.Body>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  height={50}
                  width={50}
                  src={user_image}
                  alt=""
                />
                <div className="mt-3">
                  <h6>{user_name}</h6>
                  <p>{date}</p>
                </div>
              </div>
              <div>
                <p>
                  {time}min read{" "}
                  <FontAwesomeIcon
                    onClick={() => handelBookMarked(blog)}
                    icon={faBookmark}
                  />
                </p>
              </div>
            </div>
            <Card.Title className=" fs-3 fw-bold">{tittle}</Card.Title>
            <div className="tags-container">
              <small># {first_tag}</small>
              <small># {second_tag}</small>
            </div>
            <b
              role="button"
              onClick={() => handelClick(blog)}
              className=" text-primary text-decoration-underline"
            >
              Mark as Read
            </b>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleBlog;
