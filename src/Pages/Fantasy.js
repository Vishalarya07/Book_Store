import Books from '../Books';
import useFetch from '../useFetch';

const Fantasy = () => {
    const {data, isPending, error} = useFetch();

    return (
        <div className="fantasy">
            <div className="booksfan">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Fantasy'))} category={"Fantasy"}/>}
            </div>
        </div>
    );
}
 
export default Fantasy;