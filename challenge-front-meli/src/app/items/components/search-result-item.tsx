import currencyDisplay from "@/app/shared/utils/currency-display";
import Image from "next/image";
import FreeShipIcon from '@/app/shared/components/free-ship-icon'
import { NumericFormat } from "react-number-format";

export default function SearchResultItem(props: any){
  return (
    <div className="search-result-item container-fluid m-0">
      <div className="row">
        <div className="col-auto padding-x-small">
          <div>
            <Image 
              height={180} 
              width={180}
              alt={props.item.title}
              src={props.item.picture}
              className="item-picture"
            />
          </div>
        </div>
        <div className="col-8 p-0">
          <div className="d-flex flex-column h-100 justify-content-start">
            <div className="d-flex align-items-center mt-3">
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
            <h2 className="item-title">
              {props.item.title}
            </h2>
          </div>
        </div>
        <div className="col-auto">
          <h4 className="mt-3 text-muted">
            {props.item.address}
          </h4>
        </div>
      </div> 
    </div>
  )
}