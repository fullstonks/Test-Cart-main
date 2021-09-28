import Button from "@material-ui/core/Button";

//types
import { CartItemType } from "../../../types";

//styles
import { Wrapper } from "./cartItem-styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) =>
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className="info">
        <p>Preço: R${item.price.toString().replace('.', ',')}</p>
        <p>Total: R${(item.amount * item.price).toFixed(2).toString().replace('.', ',')}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}>
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}>
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.name} />
  </Wrapper>
  ;

export default CartItem;
