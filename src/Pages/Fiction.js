import Books from '../Books';
import useFetch from '../useFetch';

const Fiction = () => {
    const {data, isPending, error} = useFetch();

    return (
        <div className="fiction">
            <div className="booksfic">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Fiction'))} category={"Fiction"}/>}
            </div>
        </div>
    );
}
 
export default Fiction;