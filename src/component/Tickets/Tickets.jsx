import React, { use, useState } from "react";
import TicketsCard from "./TicketsCard";
import TicketsCardDetails from "./TicketsCardDetails";

const Tickets = ({ ticketsPromise, setCount }) => {
  const tickets = use(ticketsPromise);

  // card right side's states
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const handleCardClick = (ticket) => {
    setCount((prev) => ({
      ...prev,
      inProgress: prev.inProgress + 1,
    }));
    setTaskStatus([...taskStatus, ticket]);
    const exists = taskStatus.find((t) => t.id === ticket.id);
    if (exists) return;
  };

  const handleComplete = (ticket) => {
    const newTaskStatus = taskStatus.filter((t) => t.id !== ticket.id);
    const newResolvedTickets = [...resolvedTickets, ticket];
    setTaskStatus(newTaskStatus);
    setResolvedTickets(newResolvedTickets);

    setCount({
      inProgress: newTaskStatus.length,
      resolved: newResolvedTickets.length,
    });
  };

  return (
    <div>
      <div className=" mx-auto max-w-7xl">
        <h1 className="mt-14 mb-2 font-bold text-xl">Customer Tickets</h1>
        {/* card full section */}
        <div className="flex">
          {/* card left section */}
          <div className="w-2/3">
            <div className="grid grid-cols-2">
              {tickets.map((ticket) => (
                <TicketsCard
                  key={ticket.id}
                  ticket={ticket}
                  onTicketCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
          {/* card right section */}
          <div className="w-1/3">
            <TicketsCardDetails
              onComplete={handleComplete}
              resolvedTickets={resolvedTickets}
              taskStatus={taskStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
