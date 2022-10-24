import { ProductContext } from '../ProductCard';
import { useContext } from 'react';
import styles from "../../styles/styles.module.css";

export const ProductButtonsAdd = () => {

    const { increaseBy } = useContext( ProductContext );

    return (
        <button 
            className={ styles.buttonAdd } 
            onClick={ () => increaseBy( +1 ) }
        > 
            +
        </button>
    );

};