//this is App.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";


const App = () => {
  
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> :<Outlet />}
      <Footer />
    </>
  );
};

export default App;
