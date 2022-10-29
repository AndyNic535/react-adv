import { ProductInCart, Product } from '../interfaces/interfaces';
import { useState } from 'react';

export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>({});

    const productHandleChangeCart = ( { count, product }: { count: number, product: Product } ) => {

        setShoppingCart( oldShoppingCart => {

            if( count === 0 ) {

                const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;

                return { ...rest };

            };

        return {

            ...oldShoppingCart,
            [ product.id ]: { ...product, count }
        };



        });

        //-------- Manejar la cantidad ( suma, o cambiar directamente el contador ) --------//

        // setShoppingCart( oldShoppingCart => {
  
        //   const productInCart: ProductInCart = oldShoppingCart[ product.id ] || { ...product, count: 0 };

        //   if( Math.max( productInCart.count + count, 0 ) ) {

        //     productInCart.count += count;

        //     return {

        //       ...oldShoppingCart,
        //       [ product.id ]: productInCart

        //     };

        //   };

        //   const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;

        //   return { ...rest };

        // });

    };

    return { 

        shoppingCart, 
        setShoppingCart, 
        productHandleChangeCart

    };

};
