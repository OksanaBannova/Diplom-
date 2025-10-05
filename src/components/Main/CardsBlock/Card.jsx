import React from "react";

const Card = ({ id,className, children }) => {
  /**Card, this is card)) */

  return (
    <>
      <div id={id} className={className + "_card card"}>{children}</div>
    </>
  );
};

export default Card;