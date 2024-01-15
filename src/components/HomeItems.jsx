import { useDispatch, useSelector } from "react-redux";
import { addToBag, deleteFromBag } from "../store/slice/bag-slice";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bagItems);

  let elementFound = false;

  for (let i = 0; i < bagItems.length; i++) {
    if (bagItems[i].id === item.id) {
      elementFound = true;
      break;
    }
  }

  const addItemToBag = () => {
    dispatch(addToBag(item));
  };

  const deleteItemFromBag = () => {
    dispatch(deleteFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs ${item.original_price}</span>
        <span className="discount">{`${item.discount_percentage}% OFF`}</span>
      </div>
      {!elementFound ? (
        <button
          type="button"
          className="btn-add-bag btn btn-success"
          onClick={addItemToBag}
        >
          Add to bag
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-danger"
          onClick={deleteItemFromBag}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default HomeItems;
