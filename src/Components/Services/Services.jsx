import '../RepServ.css'
import Card from '../../Components/General/Cards/Card'
import {SERVDATA} from "../General/Cards/CardData/ServCardData"

function Services() {
    return (
      <div className="outerWrapper">
        <div className='products__wrapper'>
            {SERVDATA.map((product) => (
                <Card key = {product.id} product = {product} />
                ))}
        </div>
      </div>
    )
}
export default Services
