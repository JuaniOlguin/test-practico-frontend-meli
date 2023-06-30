import '../items.scss'

export default function SearchResultCategories(props: any){
    return (
      <>
        <div className="d-flex text-muted categories-list">
            {
              props.categories.map((category: any, index: number) => (
                <div key={category}>
                  <p className="me-2 category mb-0">
                    {
                      category + ` ${index != props.categories.length - 1 ? ' > ' : ''}`
                    }
                  </p>
                </div>
              ))
            }
        </div>
      </>
    )
}