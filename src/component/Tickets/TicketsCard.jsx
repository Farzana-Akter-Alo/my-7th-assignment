import React from "react";

const TicketsCard = ({ ticket, onTicketCardClick }) => {
  const { id, title, description, status, customer, priority, createdAt } =
    ticket;
  return (
    <div>
      <div
        onClick={() => onTicketCardClick(ticket)}
        className="w-[392px] p-3 bg-white rounded-md mb-3"
      >
        {/* card title and status */}

        <div className="flex items-center justify-between">
          <h2 className="font-bold">{title}</h2>
          <button
            className={`px-3 py-1 borde-0  rounded-3xl text-xs font-bold ${
              status === "Open"
                ? "bg-green-200 text-green-700"
                : status === "In-Progress"
                ? "bg-yellow-300 text-yellow-700"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {status}
          </button>
        </div>
        {/* card description */}
        <div>
          <p className="text-sm mt-2 text-gray-500">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-3 ">
          <div className="flex items-center gap-3">
            {/* card id & priority */}
            <span className="text-sm text-gray-500">#{id}</span>
            <p
              className={`text-xs font-semibold ${
                priority === "HIGH PRIORITY"
                  ? "text-red-400"
                  : priority === "MEDIUM PRIORITY"
                  ? "text-yellow-500"
                  : priority === "LOW PRIORITY"
                  ? "text-green-500"
                  : "text-gray-500"
              }`}
            >
              {priority}
            </p>
          </div>
          {/* card cutomer name and date */}
          <div className="flex items-center gap-4">
            <h3 className="text-sm  text-gray-500">{customer}</h3>
            <span className="text-xs  text-gray-500">{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
