'use client'

import axios from "axios"
import { useSearchParams } from "next/navigation"
import { SearchResult } from "../shared/models/item"
import { useEffect, useState } from "react"
import SearchResultCategories from "./components/SearchResultCategories"
import SearchResultList from "./components/SearchResultList"
import ErrorMessage from "../shared/components/ErrorMessage"
import LoadingComponent from "../shared/components/loading"

export default function Items() {
  
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search')!);
  const [result, setResult] = useState<SearchResult>();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {    
    async function loadData(){
      setLoading(true);
      await axios
      .get<SearchResult>(`${process.env.NEXT_PUBLIC_BASE_URL}/items?q=${search}&limit=${4}`)
      .then((result) => {
        setResult(result.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setLoading(false);
      })
    }
    loadData();
    
  }, [search, errorMsg])
  
  return (
    <div className="container-fluid">
        {
          !loading ?
          <div className="row">
            <div className="col-0 col-md-1"></div>
              <div className="col-12 col-md-10">
                {
                  result ?
                  <>
                    <SearchResultCategories categories={result.categories} />
                    <div className="search-result-container">
                      {
                        result.items.length > 0 ?
                          <SearchResultList list={result.items} />
                        :
                          <ErrorMessage message={'No hay productos que coincidan con tu búsqueda'}/>
                      }
                    </div>                
                  </>
                  :
                  <>
                    <div className="search-result-container mt-3">
                      <ErrorMessage message={errorMsg} />
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