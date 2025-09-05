import React from "react";
import { useLocation, useParams } from "react-router-dom";

import AssistantBlock from "./AssistantBlock";
import OrderDetails from "./OrderDetails";
import LastTickets from "./LastTickets";
import { useGetLastTicketsQuery } from "../../features/myApi";
import "./sidebar.css";

const SideBar = () => {
  const location = useLocation();
  const params = useParams();

  const { data = [] /*isError*/ } = useGetLastTicketsQuery();

  if (
    location.pathname === "/Diplom-" ||
    location.pathname === "/Diplom-/order-result"
  ) {
    return;
  }

  const getLocation = () => {
    if (
      location.pathname === "/Diplom-/trains" ||
      location.pathname === "/Diplom-/trains/" 
    ) {
      return true;
    } else if (location.pathname === `/Diplom-/seats/${params.id}`) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <aside className="sidebar-wrap container p-0">
        <div className="sidebar" id="sidebar">
          {getLocation() ? <AssistantBlock /> : <OrderDetails />}
          {getLocation() && data && data.length > 0 ? (
            <LastTickets data={data.slice(0, 3)} />
          ) : null}
        </div>
      </aside>
    </>
  );
};

export default SideBar;