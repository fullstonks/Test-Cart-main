import Button from '@material-ui/core/Button';

//types
import { CartItemType } from '../../types';

//styles
import { Wrapper } from './item-styles';

type Props = {
  item: CartItemType;
  handleAddtoCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddtoCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <h3>R$ {item.price.toString().replace('.', ',')} </h3>
      <p>Estoque: {item.stock}</p>

    </div>

    <Button onClick={() => handleAddtoCart(item)}> Add to cart</Button>
  </Wrapper>
)

export default Item;
