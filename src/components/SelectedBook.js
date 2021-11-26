import React from "react";
import { Link } from "react-router-dom";

const SelectedBook = (props) => {
  const { data } = props;
  const mapItem = () => {
    if (data) {
      return {
        title: data.data.entry.global_field.title,
        number: data.data.entry.global_field.number,
        description: data.data.entry.global_field.description,
        author: data.data.entry.global_field.author,
        amazonLink: data.data.entry.global_field.link.href,
        image: `${data.data.entry.global_field.file.url}?width=300`,
      };
    } else {
      return {};
    }
  };

  const { title, number, description, author, amazonLink, image } = mapItem();

  return (
    <div>
      <>
        <Link to="/">Go back</Link>

        <div
          className='landing-book'
        >
          <h1>{title}</h1>
          <img src={image} alt="book" />
          <h5>{number} pages</h5>
          <p
            style={{
              width: "400px",
              margin: "auto",
            }}
          >
            {description}
          </p>
          <h4>Author: {author}</h4>

          <a href={amazonLink}>Go to Amazon</a>
        </div>
      </>
    </div>
  );
};

export default SelectedBook;
