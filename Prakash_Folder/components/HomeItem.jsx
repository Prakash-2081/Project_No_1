import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/Bag";

  //this is HomeItem.jsx
  const HomeItem = ({item}) => {
    const bagItems=useSelector((store)=>store.bag);

    const dispatch=useDispatch();
    const handleAddToBag=()=>{
      dispatch(bagActions.addToBag(item.id));
    }
    const handleRemoveToBag=()=>{
      dispatch(bagActions.removeFromBag(item.id));
    }
    const elementFound =bagItems.indexOf(item.id) >= 0;
    return (
  <>
  <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
        {item.rating.stars} | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? 
        <button className="btn-add-bag btn btn-danger" onClick={handleRemoveToBag}>Remove</button>:
        <button className="btn-add-bag btn btn-success" onClick={handleAddToBag}>Add to Bag</button>
      }

      </div>
  </>
  )
  }

  export default HomeItem