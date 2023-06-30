export default function ErrorMessage(props: any){
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-12 d-flex flex-column text-center align-items-center justify-content-center">
          <h1 className="fw-bold">Ups!</h1>
          <h2>{props.message}</h2>
        </div>
      </div>
    </div>
  )
}