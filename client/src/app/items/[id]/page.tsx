'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios"
import { ItemElement } from "../../shared/models/item";
import LoadingComponent from "../../shared/components/loading";
import ErrorMessage from "../../shared/components/ErrorMessage";
import SearchResultCategories from "../components/SearchResultCategories";
import ItemDetail from "../components/ItemDetail";

export default function Item() {

  const params = usePathname();
  const [itemId, setItemId] = useState(params.split('/')[2]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<ItemElement>();

  useEffect(() => {
    setItemId(params.split('/')[2]);
  }, [params]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/items/${itemId}`)
        .then((response) => {
          setItem(response.data.item);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMsg(error.message);
          setLoading(false);
        })
    }
    loadData();

  }, [itemId, errorMsg]);

  return (
    <div className="container-fluid">
        {
          !loading ?
          <div className="row">
            <div className="col-0 col-md-1"></div>
              <div className="col-12 col-md-10">
                {
                  item ?
                  <>
                    <SearchResultCategories categories={item.categories} />
                    <div className="search-result-container">
                      <ItemDetail item={item} />
                    </div>                
                  </>
                  :
                  <>
                    <div className="search-result-container mt-3">
                      <ErrorMessage message={'Producto no encontrado'} />
                    </div>
                  </>
                }  
              </div>
            <div className="col-0 col-md-1"></div>
          </div>
          :
          <div className="search-result-container mt-3">
            <LoadingComponent />
          </div>
        }
    </div>
  )
}