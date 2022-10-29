import { createContext } from "react";
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";


export const ProductContext= createContext( {} as ProductContextProps );
const { Provider } = ProductContext


export const ProductCard = ( { product, children, className, style, onChange, value } : Props ) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
        <Provider value={{

            counter,
            increaseBy,
            product

        }} >
            <div style={ style } className={ `${ styles.productCard } ${ className }` }>

                { children }

            </div>
        </Provider>
    );
};
