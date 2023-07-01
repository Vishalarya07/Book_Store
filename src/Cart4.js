const Cart4 = (props) => {
    const bookval = props.bookval;
    const finalp = props.finalp;

    return (
        <div className="bookcart">
            <div><h2 className="bookcat">Cart</h2></div>
            <div className="headingcart">
                <div>Book</div>
                <div>Title</div>
                <div>Price</div>
            </div>
            {bookval.map((indiitem) => (
                <div className="bookscart" key={indiitem.id}>
                    <div className="itemcart">
                      <img src={indiitem.photo} alt="book" />
                      <h2>{indiitem.title}</h2>
                      <div className="pricecart">Rs. {indiitem.price}</div>
                    </div>
                </div>
            ))};
            <div className="headingcart">
                <div>Final Price</div>
                <div>Rs.{finalp}</div>
            </div>
        </div>
    );
}
 
export default Cart4;