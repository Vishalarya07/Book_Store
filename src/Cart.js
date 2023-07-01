import { useContext } from "react";
import Cart4 from "./Cart4";
import { UserContext } from "./UserContext";

const Cart = () => {
    const {value} = useContext(UserContext);
    console.log('inside cart');
    // console.log(value);

    return (
        <div className="carts">
            <Cart4 bookval={value.booktem} finalp={value.fp}/>
        </div>
    );
}
 
export default Cart;