import Books from '../Books';
import useFetch from "../useFetch";

const MystThri = () => {
    const{data, isPending, error} = useFetch();

    return (
        <div className="romance">
            <div className="booksRom">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Mystery'))} category={"Mystery & Thriller"}/>}
            </div>
        </div>
    );
}
 
export default MystThri;