import { useState } from 'react'
import { useQuery } from 'react-query'

//components
import Item from './components/item/item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//styles
import { Wrapper } from './Style-app';

//types
import { CartItemType } from './types/index';

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')).json();

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const hangleRomoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Algo deu Errado...</div>;
  return (
    <Wrapper>
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
