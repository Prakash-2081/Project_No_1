import { useSelector } from "react-redux"

//this is BagSummary.jsx
const BagSummary = () => {
  const bagItemsIds=useSelector((state) => state.bag);
  const items=useSelector((state) => state.items);

  const finalitems=items.filter((item)=>{
    const itemIndex =bagItemsIds.indexOf(item.id);
    return itemIndex >=0;
  });

  const EXTRA_FEE = 100;
  let totalItem=bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach((bagItem)=>{
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  })
  let finalPayment=totalMRP -totalDiscount + EXTRA_FEE;
  
  return (
<>
<div className="bag-summary">

<div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {totalItem} </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value"> ₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount"> -₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Delivery Fee</span>
      <span className="price-item-value">{EXTRA_FEE}</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value"> ₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <a href="placeorder.html"><div className="css-xjhrni">PLACE ORDER</div></a>
  </button>
  </div>
</>
  )
}

export default BagSummary