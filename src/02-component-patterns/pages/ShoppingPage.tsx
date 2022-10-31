import { ProductCard } from "../components";
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const product = products[ 0 ];

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <br/>

      <ProductCard 
        key={ product.id }
        product={ product } 
        className="bg-dark"
        initialValue={{ count: 4, maxCount: 10 }}
      >
        {

          ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (

            <>

              <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className="custom-image" />
              <ProductCard.Title className="text-white text-bold" />
              <ProductCard.Buttons className="custom-buttons" />

              <button onClick={ reset }>Reset</button>

              <button onClick={ () => increaseBy( -2 ) }> -2 </button>
              {
                !isMaxCountReached ? 

                  ( <button onClick={ () => increaseBy( +2 ) }> +2 </button> )

                  : null
              }

              <span>{ count } - { maxCount }</span>

            </>

          )

        }
      </ProductCard>

    </div>
  );
};
