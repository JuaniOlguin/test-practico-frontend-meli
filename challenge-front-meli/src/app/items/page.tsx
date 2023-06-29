'use client'

import axios from "axios"
import { useSearchParams } from "next/navigation"
import { SearchResult } from "../shared/models/item"
import { useEffect, useState } from "react"
import SearchResultCategories from "./components/search-result-categories"
import SearchResultList from "./components/search-result-list"

export default function Items() {
  
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search')!);
  const [result, setResult] = useState<SearchResult>();

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    async function loadData(){
      await axios
        .get<SearchResult>(`${process.env.NEXT_PUBLIC_BASE_URL}/items?q=${search}&limit=${4}`)
        .then((result) => {
          setResult(result.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
    loadData();
    
  }, [search])
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-0 col-md-1"></div>
        <div className="col-12 col-md-10">
            {
              result &&
              <>
                <SearchResultCategories categories={result.categories} />
                <div className="search-result-container">
                  <SearchResultList list={result.items} />
                </div>                
              </>
            }  
        </div>
        <div className="col-0 col-md-1"></div>
      </div>
    </div>
  )
}