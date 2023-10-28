import StyledLayout, {
  Header,
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
import Contacts from "../Contacts";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Layout = ({ catalogNav, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledLayout>
      <Header>
        <Link className="logo" to="/">
          <Logo />
        </Link>

        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </Header>

      <Sidebar className={isOpen ? "active" : " "}>
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Logo />
        </Link>

        <Navigation>
          <h3>Меню</h3>

          <Link
            to="/"
            onClick={() => {
              setOpen(false);
            }}
          >
            <LiaHomeSolid />
            Главная
          </Link>

          {/* Catalog dropdown */}
          <div className="dropdown-link">
            Каталог продукции
            <AiFillCaretDown />
            <Dropdown
              onClick={() => {
                setOpen(false);
              }}
            >
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

        <Contacts />
      </Sidebar>

      <main>
        <Content>{children}</Content>
      </main>
    </StyledLayout>
  );
};

export default Layout;
