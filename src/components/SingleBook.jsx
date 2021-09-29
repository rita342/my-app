

const MyFavoriteBook = (book) => {
  return (
   
      <div className="card mt-3"key={book.asin}>
        <img src={book.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <div className="under-the-title">
            <h4>{book.price}</h4>
            <button onClick ={()=>this.setState({color:this})}>hii</button>
          </div>

        </div>
      </div>
    
  );
};

export default MyFavoriteBook;