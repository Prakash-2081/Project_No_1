//this is Home.jsx

import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const renderItems=useSelector((store) => store.items);

  return (
    <>
      <div className="items-container">
        {renderItems.map((item)=>
            <HomeItem key={item.id} item={item} />
        )}
      </div>
    </>
  );
};

export default Home;
