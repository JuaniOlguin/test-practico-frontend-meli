import currencyDisplay from "../../shared/utils/currency-display";
import Image from "next/image";
import FreeShipIcon from '../../shared/components/FreeShipIcon';
import { NumericFormat } from "react-number-format";
import Link from "next/link";

export default function SearchResultItem(props: any){
  return (
    <Link href={`/items/${props.item.id}`}
    >
      <div className="search-result-item container-fluid m-0">
        <div className="row">
          <div className="col-12 col-md-auto padding-x-small">
            <div className="item-picture-wrapper">
              <Image 
                height={180} 
                width={180}
                alt={props.item.title}
                src={props.item.picture}
                className="item-picture"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <div className="d-flex flex-column h-100 justify-content-start">
              <div className="d-flex align-items-center mt-3 item-info">
                <h1 className="mb-0">
                  <NumericFormat value={props.item.price.amount.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={currencyDisplay(props.item.price.currency)} />
                </h1>
                <span className="ms-2 mb-0">
                  {
                    props.item.free_shipping &&
                    <FreeShipIcon />
                  }
                </span>
              </div>
              <h2 className="item-title item-info mb-0">
                {props.item.title}
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-auto item-address">
            <h4 className="mt-3 text-muted w-100 pe-3">
              {props.item.address}
            </h4>
          </div>
        </div> 
      </div>
    </Link>
  )
}