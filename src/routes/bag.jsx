import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bagItems);

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((bagItem) => (
              <BagItem key={bagItem.id} item={bagItem} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bag;
