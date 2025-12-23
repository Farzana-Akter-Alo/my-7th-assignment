import { useState } from "react";
import Nav from "./component/nav";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Tickets from "./component/Tickets/Tickets";
import Footer from "./component/Footer/Footer";

// fetch data for tickets
const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

// fetch promise
const ticketsPromise = fetchTickets();

function App() {
  const [count, setCount] = useState({
    inProgress: 0,
    resolved: 0,
  });

  return (
    <>
      <Navbar />
      <Banner count={count} />
      <Tickets setCount={setCount} ticketsPromise={ticketsPromise} />
      <Footer />
    </>
  );
}

export default App;
