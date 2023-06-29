'use client'

import { useRouter } from "next/navigation";
import LogoMeli from "./logo-meli";
import { useState } from "react";

function SearchIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  )
}

export default function SearchBar() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    search: '',
  });

  const handleInputChange = (event: any) => {
    setFormData({
      search: event.target.value
    });    
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`items?search=${formData.search}`)
  };
  
  return (
    <div className="search-bar container-fluid">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-10">
          <div className="d-flex w-100 justify-content-center">
            <form onSubmit={handleSubmit} className="d-flex align-items-center w-100">
              <div className="me-3">
                <LogoMeli />
              </div>
              <input
                type="text" 
                placeholder="Nunca dejes de buscar"
                onChange={handleInputChange}
              />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

