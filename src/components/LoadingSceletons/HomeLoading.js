import React from "react";
import "../../App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const HomeLoading = () => {
  return (
    <>
      <div className="search">
        <Skeleton width={300} height={30} />
      </div>
      <div className="App">
        <div>
          <Skeleton className="images" width={180} height={270} />
          <div className="home-loading-margin">
            <Skeleton count={3} width={180} height={15} />
          </div>
        </div>
        <div>
          <Skeleton className="images" width={180} height={270} />
          <div className="home-loading-margin">
            <Skeleton count={3} width={180} height={15} />
          </div>
        </div>
        <div>
          <Skeleton className="images" width={180} height={270} />
          <div className="home-loading-margin">
            <Skeleton count={3} width={180} height={15} />
          </div>
        </div>
        <div>
          <Skeleton className="images" width={180} height={270} />
          <div className="home-loading-margin">
            <Skeleton count={3} width={180} height={15} />
          </div>
        </div>
      </div>
      <div className="pagination-buttons">
        <Skeleton width={100} height={40} />
        <Skeleton width={100} height={40} />
      </div>
    </>
  );
};
export default HomeLoading;
