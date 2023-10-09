import StyledTabs, { Buy } from "./Tabs.styled";
import { TbShoppingCartDollar } from "react-icons/tb";

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
         <Buy>
            Оформить заказ
            <TbShoppingCartDollar />
         </Buy>
      </StyledTabs>
   );
};

export default Tabs;
