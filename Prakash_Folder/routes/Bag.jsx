//this is Bag.jsx


import { useSelector } from "react-redux"
import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"

const Bag = () => {
  const bagItems=useSelector((store)=>store.bag);
  const items=useSelector((store)=>store.items);

  const finalitems=items.filter((item)=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
    
  return (
<>
  <center>
<main>

      <div className="bag-page">
        
        <div className="bag-items-container">
          {finalitems.map(item =>(

            <BagItem item={item} />
          ))
        }
        
        </div>
    <BagSummary />
      </div>
    </main>
  </center>
</>
  )
}

export default Bag