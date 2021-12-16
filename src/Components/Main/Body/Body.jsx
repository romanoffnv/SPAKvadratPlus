
import { FEATUREDDATA } from "../../General/Cards/CardData/FeatCardData";
import "./Body.css";
import Card from '../../General/Cards/Card'
// import {REPDATA} from "../../General/Cards/CardData/RepCardData"



export default function Body() {
  return (
    <div className="body">
      <div className="bodyWrapper">
        <h2>
          У нас часто заказывают <br /> такие услуги
        </h2>
        <div className="cardWrapper">
            {FEATUREDDATA.map((product) => (
                <Card key = {product.id} product = {product} />
                ))}
        </div>
        
      </div>
    </div>
  );
}
