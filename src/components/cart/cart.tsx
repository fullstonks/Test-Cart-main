import CartItem from "./cartItem/cartItem";

//styles
import { Wrapper } from "./cart-styles";

//types
import { CartItemType } from "../../types";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};


const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>
        Seu Carrinho de Compras
      </h2>
      {cartItems.length === 0 ? <p>Carrinho vazio,Vamos as Compras!</p> : null}
      {cartItems.map(item => (
        <CartItem />
      ))}

    </Wrapper>
  )
}

export default Cart;
