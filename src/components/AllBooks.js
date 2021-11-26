import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { LANDING_ROUTE } from "../common/routes";

const AllBooks = (props) => {
  const bookLink = (id) => LANDING_ROUTE.replace(":entryUid", id);

  const { data, searchTerm } = props;
  return (
    <div className="App">
      {data &&
        data.all_book_shelf.items
          // eslint-disable-next-line array-callback-return
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            const mapItem = {
              title: item.title,
              uid: item.system.uid,
              image: item.global_field.fileConnection.edges[0].node.url,
            };

            const { title, uid, image } = mapItem;

            return (
              <ul
                key={uid}
                style={{ listStyleType: "none", maxWidth: "180px" }}
              >
                <li>
                  <Link to={bookLink(uid)}>
                    <img className="images" src={image} alt="book" />
                  </Link>
                </li>
                <li
                  style={{
                    paddingBottom: "15px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Link style={{ textDecoration: "none" }} to={bookLink(uid)}>
                    {title}
                  </Link>
                </li>
              </ul>
            );
          })}
    </div>
  );
};

export default AllBooks;
