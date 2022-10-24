import { ProductButtonsRest } from "./product-buttons/ProductButtonsRest";
import { ProductButtonsCounter } from "./product-buttons/ProductButtonsCounter";
import { ProductButtonsAdd } from './product-buttons/ProductButtonsAdd';
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {

    return (
        <div className={ styles.buttonsContainer }>

            <ProductButtonsRest />

            <ProductButtonsCounter />

            <ProductButtonsAdd />

        </div>
    );

};