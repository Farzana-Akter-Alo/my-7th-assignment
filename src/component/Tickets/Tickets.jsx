import React, { use, useState, useEffect } from "react";
import TicketsCard from "./TicketsCard";
import TicketsCardDetails from "./TicketsCardDetails";
import { toast } from "react-toastify";

const Tickets = ({ ticketsPromise, setCount }) => {
  // card right side's states
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  // for remove card state
  const [tickets, setTickets] = useState([]);

  // for remove card
  useEffect(() => {
    ticketsPromise.then((data) => setTickets(data));
  }, [ticketsPromise]);

  const handleCardClick = (ticket) => {
    const exists = taskStatus.find((t) => t.id === ticket.id);
    if (exists) {
      toast.warning("This ticket is already in progress!", {
        toastId: `in-progress-${ticket.id}`,
      });
      return;
    }

    setTaskStatus([...taskStatus, ticket]);

    setCount((prev) => ({
      ...prev,
      inProgress: prev.inProgress + 1,
    }));

    toast.success("Ticket added to In-Progress", {
      toastId: `added-${ticket.id}`,
    });
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

    toast.success(`Ticket "${ticket.title}" marked as Resolved!`, {
      toastId: `resolved-${ticket.id}`,
    });

    // Remove from left tickets cards
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
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
