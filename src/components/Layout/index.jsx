import StyledLayout, {
   Sidebar,
   Content,
   Navigation,
   Dropdown,
} from "./Layout.styled";
import Logo from "../shared/Logo";
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { AiFillCaretDown } from "react-icons/ai";
import { PiNewspaperClippingLight, PiAddressBookLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

const Layout = ({ catalogNav, children }) => {
   return (
      <StyledLayout>
         <main>
            <Sidebar>
               <Logo />

               <Navigation>
                  <h3>Меню</h3>

                  <Link to="/">
                     <LiaHomeSolid />
                     Главная
                  </Link>

                  {/* Catalog dropdown */}
                  <div className="dropdown-link">
                     Каталог продукции
                     <AiFillCaretDown />
                     <Dropdown onClick={() => {}}>
                        {catalogNav.data?.map((item, i) => (
                           <Link key={`item-${i}`} to={item.link}>
                              {item.name}
                           </Link>
                        ))}
                     </Dropdown>
                  </div>

                  <Link>
                     <PiNewspaperClippingLight />
                     Блог
                  </Link>

                  <Link>
                     <CiDeliveryTruck />
                     Доставка
                  </Link>

                  <Link>
                     <PiAddressBookLight />
                     Контакты
                  </Link>
               </Navigation>
            </Sidebar>
            <Content>{children}</Content>
         </main>
      </StyledLayout>
   );
};

export default Layout;
