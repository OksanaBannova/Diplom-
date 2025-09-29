import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useLocation } from "react-router-dom";
import { Main } from "react-pure-carousel";

const Main = (props) => {
  const location = useLocation();

  const classBased =
    location.pathname === "/Diploma-FFE-Train-Tickets"
      ? "main-content__home-page"
      : "main-content__wrap d-flex";
  return (
    <main className="main container-fluid">
      <div className="row">
        <div className="col col-lg p-0">
          <div className={classBased}>{props.children}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;