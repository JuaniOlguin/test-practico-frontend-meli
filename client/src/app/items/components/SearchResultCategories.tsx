import '../items.scss'

export default function SearchResultCategories(props: any){
    return (
      <>
        <div className="d-flex text-muted categories-list">
            {
              props.categories.map((category: any, index: number) => (
                <div className='d-flex align-items-center' key={category}>
                  {
                    <div className='d-flex align-items-center text-start'>
                      <p className="category mb-0">
                          {category}
                      </p>
                      <span className='mx-2'>{index != props.categories.length - 1 ? '>' : ''}</span>
                    </div>
                  }
                </div>
              ))
            }
        </div>
      </>
    )
}