import { ProductContext } from '../ProductCard';
import { useContext } from 'react';
import styles from "../../styles/styles.module.css";

export const ProductButtonsRest = () => {

    const { increaseBy } = useContext( ProductContext );

    return (
        <button 
            className={ styles.buttonMinus } 
            onClick={ () => increaseBy( -1 ) }
        > 
            -
        </button>
    );

};