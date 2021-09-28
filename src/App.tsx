import { useState } from 'react'
import { useQuery } from 'react-query'

//components
import Item from './components/item/item';
import Cart from './components/cart/cart';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//styles
import { Wrapper, StyledButton } from './Style-app';

//types
import { CartItemType } from './types/index';

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(check => {
      // is the item already in the cart ?
      const isItemInCart = check.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return check.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      //firt time item on cart
      return [...check, { ...clickedItem, amount: 1 }]
    });
  };

  const handleRomoveFromCart = (id: number) => {
    setCartItems(check =>
      check.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu Errado...</div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRomoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddtoCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
