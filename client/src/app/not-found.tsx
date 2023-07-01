import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0">
        <div className="col-1"></div>
        <div className="col-10 p-0 d-flex align-items-center justify-content-center">
          <div className="not-found-container">
            <h1 className="fw-bold">Ups!</h1>
            <h2 className="mt-4 mb-4">Error 404 - Página no encontrada</h2>
            <Link href={'/'} >Volver a inicio</Link> 
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}