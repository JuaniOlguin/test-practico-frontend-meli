import Image from "next/image";
import { ItemElement } from "../../shared/models/item";
import { NumericFormat } from "react-number-format";
import currencyDisplay from "../../shared/utils/currency-display";
import FreeShipIcon from "../../shared/components/FreeShipIcon";

export default function ItemDetail(props: any){

  const item: ItemElement = props.item;

  return(
    <div className="container-fluid">
      <div className="row item-detail-row">
        <div className="col-12 col-md-7 p-0">
          <Image 
            height={680} 
            width={680}
            alt={props.item.title}
            src={props.item.picture}
            className="item-picture item-detail-picture"
          />
          <div className="item-description">
            <h1 className="item-detail-title mb-0 fw-normal text-wrap">
              Descripción del producto
            </h1>
            <p className="item-description-text">
              {item.description}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 p-0 item-info-col">
          <div className="item-detail-info">
            <h3 className="mb-0">{item.condition == 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos {item.free_shipping ? <FreeShipIcon /> : ''}</h3>
            <h1 className="item-detail-title">
              {item.title}
            </h1>
            <h1 className="item-price">
              <NumericFormat value={item.price.amount.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={currencyDisplay(item.price.currency)} />
            </h1>
            <button type="button" className="primary-big-button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}