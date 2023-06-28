'use client'

import { useRouter, useSearchParams } from "next/navigation"

export default function Items() {

  // const router = useRouter()
  // console.log(router);
  const searchParams = useSearchParams()
  const search = searchParams.get('search');

  
  
  return (
    
    <div>
      Items
    </div>
  )
  }