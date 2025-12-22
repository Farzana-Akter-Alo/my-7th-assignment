import { useState } from "react";
import Nav from "./component/nav";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Tickets from "./component/Tickets/Tickets";

// fetch data for tickets
const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

// fetch promise
const ticketsPromise = fetchTickets();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Tickets ticketsPromise={ticketsPromise} />
    </>
  );
}

export default App;
