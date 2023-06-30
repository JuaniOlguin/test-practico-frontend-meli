'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Item(){
  
  const params = usePathname();
  const [itemId, setItemId] = useState(params.split('/')[2]);

  useEffect(() => {      
    setItemId(params.split('/')[2]);
  }, [params]);

  return(
    <h1>Item {itemId}</h1>
  )
}