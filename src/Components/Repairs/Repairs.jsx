import '../RepServ.css'
import Card from "../../Components/General/Cards/Card";
import { REPDATA } from "../General/Cards/CardData/RepCardData";

function Repairs() {
  return (
    <div className="outerWrapper">
      <div className="products__wrapper">
        {REPDATA.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Repairs;
