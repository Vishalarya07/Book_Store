import { useContext } from 'react';
import './Book.css';
import { UserContext } from './UserContext';

const Books = (props) => {
    const genrebook = props.genrebook;
    const category = props.category;

    const {value, setValue} = useContext(UserContext);

    const handleCart = (btitle,bprice,bid,bphoto) =>{
        console.log('added');
        const bobj = {"title":btitle, "price":bprice, "id":bid, "photo":bphoto};
        setValue({"noqty":value.noqty+1 , "fp":value.fp+bprice, "booktem":[...value.booktem, bobj]});
             
    }
    
    return (
        <div className="books">
            <h2 className='bookcat'>Books under <span>{` ${category}`}</span>{` `}category</h2>
            <div className="DisplayBooks">
            {genrebook.map(genbook => (
                <div className="booksDisplay" key={genbook.id}>
                    <div className="individualBooks">
                        <img src={genbook.image_url} alt="book" />
                        <h2>{genbook.title}</h2>
                        <div className='authorname'><span>By </span>{genbook.authors}</div>
                        <div><span>Price: </span>{`Rs.${genbook.num_pages}`}</div>
                        <button onClick={() => {handleCart(genbook.title,genbook.num_pages,genbook.id,genbook.image_url)}}><div className='Button'>+ Add to cart</div></button>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    );
}
 
export default Books;