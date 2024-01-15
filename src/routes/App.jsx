import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import FetchingStatus from "../components/FetchingStatus";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function App() {
  const fetchingStatus = useSelector((state) => state.fetchingStatus);
  return (
    <>
      <Header />
      <FetchingStatus />
      {fetchingStatus.currentlyFetching ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
