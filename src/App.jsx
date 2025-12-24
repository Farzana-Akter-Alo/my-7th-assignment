import { useState } from "react";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Tickets from "./component/Tickets/Tickets";
import Footer from "./component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
