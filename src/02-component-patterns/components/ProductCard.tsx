import { createContext } from "react";
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";


export const ProductContext= createContext( {} as ProductContextProps );
const { Provider } = ProductContext


export const ProductCard = ( { product, children, className, style, onChange, value, initialValue } : Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  return (
        <Provider value={{

            counter,
            increaseBy,
            maxCount,
            product

        }} >
            <div style={ style } className={ `${ styles.productCard } ${ className }` }>

                { children({

                    count: counter,
                    isMaxCountReached,
                    reset,
                    maxCount: initialValue?.maxCount,
                    increaseBy,
                    product

                }) }

            </div>
        </Provider>
    );
};
