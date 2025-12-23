import React from "react";

const TicketsCardDetails = ({ taskStatus, resolvedTickets, onComplete }) => {
  return (
    <div>
      <div>
        {/* task status */}
        <h2 className="text-lg font-bold mb-2">Task Status</h2>
        <div className="">
          {taskStatus.length === 0 ? (
            <p className="text-sm text-gray-500">
              Select a ticket to add to Task Status
            </p>
          ) : (
            taskStatus.map((ticket) => (
              <div
                className="bg-white px-4 py-2  rounded-md mb-3"
                key={ticket.id}
              >
                <p className="text-md font-semibold">{ticket.title}</p>
                <button
                  className="bg-green-600 px-2 py-2 w-[394px] text-white text-sm rounded-sm mt-4 mb-2"
                  onClick={() => onComplete(ticket)}
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* resolved task */}
      <div>
        <h2 className="text-lg font-bold mt-6 mb-2">Resolved Task</h2>
        <div>
          {resolvedTickets.length === 0 ? (
            <p className="text-sm text-gray-500"> No resolved tasks yet</p>
          ) : (
            resolvedTickets.map((ticket) => (
              <div className="bg-[#E0E7FF] rounded-sm px-4 py-6 mb-3 font-semibold" key={ticket.id}>
                {ticket.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketsCardDetails;
