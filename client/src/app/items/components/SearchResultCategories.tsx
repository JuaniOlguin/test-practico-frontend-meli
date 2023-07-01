import '../items.scss'

export default function SearchResultCategories(props: any){
    return (
      <>
        <div className="d-flex text-muted categories-list">
            {
              props.categories.map((category: any, index: number) => (
                <div key={category}>
                  {
                    <p className="category mb-0 d-flex align-items-center text-center">
                        {category}
                        <span className='mx-2'>{index != props.categories.length - 1 ? '>' : ''}</span>
                    </p>
                  }
                </div>
              ))
            }
        </div>
      </>
    )
}