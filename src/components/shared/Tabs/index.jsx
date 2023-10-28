import StyledTabs from "./Tabs.styled";
import { TbShoppingCartDollar } from "react-icons/tb";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: 1,
    query: "product-details",
    title: "Детали",
  },
  {
    id: 2,
    query: "product-photos",
    title: "Фотографии",
  },
];

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <StyledTabs>
      {tabs?.map((tab, i) => (
        <button
          onClick={() => setActiveTab(tab.query)}
          key={`tab-${i}`}
          className={activeTab == tab.query ? "active" : ""}
        >
          {tab.title}
        </button>
      ))}
      <Link
        className="order-now"
        to="/product-order"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          Оформить заказ
          <TbShoppingCartDollar />
        </button>
      </Link>
    </StyledTabs>
  );
};

export default Tabs;
