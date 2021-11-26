import "../App.css";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import HomeLoading from "../components/LoadingSceletons/HomeLoading";
import Search from "../components/Search";
import AllBooks from "../components/AllBooks";
import Pagination from "../components/Pagination";

const Home = () => {
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
    <HomeLoading />
  ) : (
    <>
      <Search onChange={setSearchTerm} />
      <AllBooks data={data} searchTerm={searchTerm} />
      <Pagination data={data} skip={skip} setSkip={setSkip} />
    </>
  );
};

export default Home;
