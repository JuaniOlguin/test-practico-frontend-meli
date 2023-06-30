'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function LogoMeli() {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    function onWidthChange(event: any){
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', onWidthChange);
    
  }, [width]);

  return(
    <Link href="/">
      <Image 
        alt="Logo MeLi" 
        src={width > 768 ? '/logo-meli.png' : '/logo-meli-small.png'}
        width={width > 768 ? 134 : 44}
        height={width > 768 ? 34 : 34}
      />
    </Link>
    )
}