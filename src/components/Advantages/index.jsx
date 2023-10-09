import StyledAdvantages, { Card, Row } from "./Advantages.styled";
import { GiWoodPile, GiDeadWood } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Advantages = () => (
   <StyledAdvantages>
      <h2>Наши преимущества</h2>

      <Row>
         <Card>
            <GiWoodPile />

            <article>
               <h3>Поставки от производителя</h3>
               <p>
                  Мы уверены, что пиломатериалы с нашей базы удовлетворят
                  эстетический вкус покупателя и прослужат долгие годы.
               </p>
            </article>
         </Card>

         <Card>
            <GiDeadWood />

            <article>
               <h3>Большой ассортимент</h3>
               <p>
                  У нас огромный ассортимент, который позволит подобрать
                  идеальный вариант для решения именно Ваших задач
               </p>
            </article>
         </Card>

         <Card>
            <TbTruckDelivery />

            <article>
               <h3>Своевременная доставка</h3>
               <p>
                  Мы заботимся о том, чтобы каждый заказ был выполнен в срок и
                  доставлен клиенту в установленные сроки.
               </p>
            </article>
         </Card>
      </Row>
   </StyledAdvantages>
);

export default Advantages;
