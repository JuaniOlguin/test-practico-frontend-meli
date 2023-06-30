import { ItemElement } from '../../shared/models/item';
import '../items.scss';
import SearchResultItem from './SearchResultItem';

export default function SearchResultList(props: any){
  
  return (
    <div className="search-result">
        {
          props.list.map((item: ItemElement, index: number) => (  
            <div key={item.title}>
              <SearchResultItem item={item} />
              {
                index != props.list.length - 1 &&
                <hr className='my-1 mx-4' />
              }
            </div>
          ))
        }
    </div>
  )
}