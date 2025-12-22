import React, { use } from "react";

const Tickets = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);
  console.log(tickets);
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <h1>this is a tickets</h1>
      </div>
    </div>
  );
};

export default Tickets;
