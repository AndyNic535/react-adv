import { ProductButtonsRest } from "./product-buttons/ProductButtonsRest";
import { ProductButtonsCounter } from "./product-buttons/ProductButtonsCounter";
import { ProductButtonsAdd } from './product-buttons/ProductButtonsAdd';
import styles from "../styles/styles.module.css";


export interface PropsButtons {

    className?: string,
    style?: React.CSSProperties,

};


export const ProductButtons = ( { className, style }: PropsButtons ) => {

    return (
        <div style={ style } className={ `${ styles.buttonsContainer } ${ className }` }>

            <ProductButtonsRest />

            <ProductButtonsCounter />

            <ProductButtonsAdd />

        </div>
    );

};