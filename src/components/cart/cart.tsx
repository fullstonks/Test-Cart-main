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
  const calculeteTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>
        Seu Carrinho de Compras
      </h2>
      {cartItems.length === 0 ? <p>Carrinho vazio,Vamos as Compras!</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: R${calculeteTotal(cartItems).toFixed(2).toString()
        .replace('.', ',')}</h2>
    </Wrapper>
  )
}

export default Cart;
