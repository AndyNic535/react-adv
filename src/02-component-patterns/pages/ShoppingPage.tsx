import { ProductCard, ProductImg, ProductButtons } from "../components";
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, productHandleChangeCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <br/>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          products.map( product => (

            <ProductCard 
              key={ product.id }
              product={ product } 
              className="bg-dark"
              onChange={ ( event ) => productHandleChangeCart( event ) }
              value={ shoppingCart[ product.id ]?.count || 0 }
            >
              <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className="custom-image" />
              <ProductCard.Title className="text-white text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>

          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries( shoppingCart ).map( ([ key, product ]) => (

            <ProductCard 
              key={ key }
              product={ product } 
              className="bg-dark"
              style={{ width: '150px' }}
              onChange={ ( event ) => productHandleChangeCart( event ) }
              value={ product.count }
            >
              <ProductImg style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className="custom-image" />
              <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>

          ))
        }
        </div>
    </div>
  );
};
