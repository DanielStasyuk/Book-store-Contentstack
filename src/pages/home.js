import "../App.css";
import { useState } from "react";
import Landing from "./landing";
import Search from "../components/Search";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  const [pickedBook, setPickedBook] = useState();
  const [isHome, setIsHome] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);

  const LOAD_POSTS = gql`
    query {
      all_book_shelf (limit : 4, skip: ${skip}) {
        total
        items {
          system {
            uid
          }
          global_field {
            author
            description
            link {
              href
            }
            number
            title
            fileConnection {
              edges {
                node {
                  url
                }
              }
            }
          }
          title
        }
      }
    }
  `;

  const { loading, data } = useQuery(LOAD_POSTS);

  return loading ? (
    <h1 className="loading">Loading...</h1>
  ) : isHome ? (
    <>
      <Search onChangeInput={setSearchTerm} />

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
            .map((item) => (
              <ul
                key={item.system.uid}
                style={{ listStyleType: "none", maxWidth: "180px" }}
              >
                <li>
                  <img
                    className="images"
                    src={item.global_field.fileConnection.edges[0].node.url}
                    onClick={() => {
                      setPickedBook(item);
                      setIsHome(false);
                    }}
                    alt="book"
                  />
                </li>
                <li
                  style={{
                    paddingBottom: "15px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    setPickedBook(item);
                    setIsHome(false);
                  }}
                >
                  {item.title}
                </li>
              </ul>
            ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        {data && skip !== 0 && skip > 0 && (
          <button className="btn" onClick={() => setSkip((prev) => prev - 4)}>
            Previous
          </button>
        )}
        {data &&
          data.all_book_shelf.total >= skip &&
          data.all_book_shelf.items.length === 4 && (
            <button className="btn" onClick={() => setSkip((prev) => prev + 4)}>
              Next
            </button>
          )}
      </div>
    </>
  ) : (
    <Landing goHome={setIsHome} book={pickedBook} />
  );
};

export default Home;
