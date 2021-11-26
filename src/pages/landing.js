import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SelectedBook from "../components/SelectedBook";
import LandingLoading from "../components/LoadingSceletons/LandingLoading";

const Landing = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { entryUid } = useParams();

  useEffect(() => {
    if (entryUid) {
      axios
        .get(
          `https://cdn.contentstack.io/v3/content_types/book_shelf/entries/${entryUid}?environment=store`,
          {
            headers: {
              api_key: process.env.REACT_APP_API_KEY,
              access_token: process.env.REACT_APP_DELIVERY_TOKEN,
              environment: process.env.REACT_APP_ENVIRONMENT,
              region: "eu" ? "eu" : "us",
            },
          }
        )
        .then(function (response) {
          setData(response);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [entryUid]);

  return loading ? <LandingLoading /> : <SelectedBook data={data} />;
};

export default Landing;
