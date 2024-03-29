import StyledIntro, { Row } from "./Intro.styled";
import { MdOutlineDoneOutline } from "react-icons/md";

const Intro = () => (
   <StyledIntro>
      <Row className="lumbers">
         <article>
            <h2>Пиломатериалы</h2>

            <p>
               Современное строительство требует качественно нового подхода к
               выбору строительных материалов, в частности к выбору наиболее
               востребованного из них среди населения - пиломатериала. На первый
               план выходят: качество, долговечность, экологичность и надежность
               продукции.
            </p>

            <p>
               <strong>GreenBrus</strong> осуществляет производство и продажу
               пиломатериалов высокого качества оптом и в розницу. Благодаря
               использованию современного оборудования, лучшего сырьевого
               материала и осуществлению контроля качества на каждом этапе
               производства, наши пиломатериалы отличаются точной геометрией и
               соответствуют всем требованиям ГОСТ России к данному виду
               продукции. Для того, чтобы купить пиломатериалы от производителя
               в Москве и области по приемлемой цене, свяжитесь с нами любым
               удобным для Вас способом.
            </p>
         </article>

         <img src="/images/edged-board.png" />
      </Row>

      <Row className="classification">
         <article>
            <h2>Классификация пиломатериалов</h2>

            <p>
               Первичным сырьем для производства пиломатериалов служат стволы
               различных пород деревьев, предварительно очищенные от коры и
               веток. Зависимо от породы обрабатываемого дерева пиломатериалы
               разделяют на:
            </p>

            <ul>
               <li>
                  <MdOutlineDoneOutline />
                  лиственные пиломатериалы - чаще всего используются для
                  проведения различных отделочных работ
               </li>
               <li>
                  <MdOutlineDoneOutline />
                  хвойные пиломатериалы - применяются при возведении каркасов и
                  несущих конструкций, обустройстве пола
               </li>
            </ul>

            <p>
               При выборе наиболее подходящих лесоматериалов для конкретного
               вида работ также берутся во внимание физические и механические
               характеристики отдельной породы древесины и соблюдение технологии
               изготовления и просушки.
            </p>
         </article>

         <img src="/images/lumb.png" />
      </Row>

      <Row className="production">
         <img src="/images/lumber-wood.png" />

         <article>
            <h2>Производство, продажа, доставка</h2>

            <p>
               Производство, продажа и доставка пиломатериалов в России - одно
               из основных направлений деятельности <strong>GreenBrus</strong>.
               Наши эксперты проконсультируют Вас по всем интересующим вопросам
               и помогут подобрать пиломатериал, отвечающий всем требованиям
               Вашего строительства!
            </p>
         </article>
      </Row>
   </StyledIntro>
);

export default Intro;
