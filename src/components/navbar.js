import React, { useEffect, useState } from "react";
import "./App.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState(0);

  const controlNavBar = () => {
    setScroll(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  });

  return (
    <>
      <div>
      </div>
      <div className="general">
        <nav
          style={
            window.scrollY !== 0
              ? {
                  width: "100%",
                  borderBottomLeftRadius: "0",
                  transition:
                    "all 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                }
              : { width: "92%" }
          }
          className={show ? "active" : "hidden"}
        ></nav>
      </div>
    </>
  );
}
