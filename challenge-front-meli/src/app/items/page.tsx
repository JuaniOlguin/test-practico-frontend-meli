'use client'

import axios from "axios"
import { useSearchParams } from "next/navigation"
import { SearchResult } from "../shared/models/item"
import { useEffect, useState } from "react"

export default function Items() {

  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search')!);
  const [result, setResult] = useState<SearchResult>();

  useEffect(() => {
    // console.log(searchParams.get('search'));
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    async function loadData(){
      await axios
        .get<SearchResult>(`http://localhost:3001/api/items?q=${search}&limit=${4}`)
        .then((result) => {
          setResult(result.data)
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
    loadData();
    
  }, [search])
  
  return (
    <div>{result?.categories}</div>
  )
}