import Books from '../Books';
import useFetch from '../useFetch';


const Romance = () => {
    const {data, isPending, error} = useFetch();
    

    return (
        <div className="romance">
            <div className="booksRom">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Romance'))} category={"Romance"}/>}
            </div>
        </div>
    );
}
 
export default Romance;