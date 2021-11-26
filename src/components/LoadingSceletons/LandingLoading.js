import React from "react";
import "../../App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const LandingLoading = () => {
  return (
    <>
      <Skeleton width={100} height={20} />

      <div className="landing-book">
        <div className="landing-loading-margin">
          <Skeleton width={600} height={40} />
        </div>

        <Skeleton width={300} height={450} />
        <div className="landing-loading-margin">
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton count={5} width={400} height={15} />

        <div className="landing-loading-margin">
          <Skeleton width={170} height={20} />
        </div>
        <Skeleton width={100} height={20} />
      </div>
    </>
  );
};
export default LandingLoading;
